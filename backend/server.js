import express, { json } from "express";
import cors from "cors";
import { hash, compare } from "bcryptjs";
import { QuickDB } from "quick.db";
import ollama from 'ollama';

const app = express();
const db = new QuickDB();

app.use(cors());
app.use(json());


app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    const existingUser = await db.get(`user_${email}`);
    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await hash(password, 10);

    await db.set(`user_${email}`, { name, email, password: hashedPassword });

    res.status(201).json({ message: "User registered successfully" });
});

app.get("/getUser", async (req, res) => {
    const { email } = req.query; 

    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }

    const user = await db.get(`user_${email}`);

    if (user) {
        return res.status(200).json({ name: user.name });
    } else {
        return res.status(404).json({ error: "User not found" });
    }
});


app.post("/getPrimaryAnalysis", async (req, res) => {
    const { age, concern, duration, hasBefore, history } = req.body;

    if (!age || !concern || !duration || !hasBefore) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        const response = await ollama.chat({
            model: 'llama3',
            messages: [{
                role: 'user',
                content: `Type: Primary Analysis \nPrimary Concern of patient: ${concern} \nDuration: ${duration} \nPrevious Speech Therapy: ${hasBefore} \nOther Remarks: ${history || "None"}`
            }]
        });

        return res.status(200).json({ analysis: response.message.content });
    } catch (error) {
        console.error("Error fetching analysis:", error);
        return res.status(500).json({ error: "Failed to generate analysis" });
    }
});


app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await db.get(`user_${email}`);
    if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    res.json({ message: "Login successful", user: { name: user.name, email: user.email } });
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
