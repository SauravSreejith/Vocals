# 🎤 Vocals - Speech Therapy Software App

**Empowering voices, one exercise at a time.**  
An open-source, accessible platform for speech therapy—designed to support individuals with speech disorders through guided exercises, real-time feedback, and progress tracking.

---

## 🚀 About the Project

Speech disorders can make communication challenging and impact confidence and quality of life. Unfortunately, access to traditional therapy is often limited by high costs, in-person requirements, and lack of availability in remote areas.

**Vocals** addresses these barriers by offering a digital, user-friendly alternative:
- 👄 Guided speech exercises
- 🎙️ Real-time pronunciation feedback
- 📊 Progress tracking and insights
- 🧠 AI-assisted recommendations (coming soon)

Whether you're a speech therapy patient, practitioner, or just looking to improve articulation, Vocals offers an intuitive and empowering experience—accessible anytime, anywhere.

---

## 🛠️ Tech Stack

This project is built using modern web technologies for speed, responsiveness, and ease of development:

- **React** – for building dynamic user interfaces  
- **Tailwind CSS** – for fast, utility-first styling  
- **Node.js + Express.js** – for server-side logic and API handling  
- **Speech Recognition APIs** – for real-time pronunciation feedback  

---

## 📦 Getting Started

### Prerequisites

Ensure you have Node.js and npm installed. We recommend using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) for managing Node versions.

### Installation

```bash
# Clone the repository
git clone https://github.com/SauravSreejith/Vocals.git

# Navigate to the project directory
cd vocals-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app should now be running at `http://localhost:5173`.

### Start the backend server

Ensure that you run the backend server service using the following command:
```
node backend/server.js
```

You also need to have an LLM Inference server in background running for the AI features. The currently selected model is llama3, which can be edited in `backend/server.js`.

We recommend using [Ollama](https://github.com/ollama/ollama) or [LM Studio](https://lmstudio.ai/docs/app/api). You may need to setup a JSON schema for proper parsing.


---

## 🌐 Deployment

To deploy this app on your preferred hosting service:

1. Build the app using:
   ```bash
   npm run build
   ```

2. Upload the `dist/` folder to services like **Netlify**, **Vercel**, or **GitHub Pages**.

---

## 💡 Features in Progress

- 🔒 User login & personalized profiles  
- 🧠 AI-generated summaries and improvement tips  
- 🏥 Doctor recommendations based on user tags  
- 📱 Mobile app version  

---

## 👐 Contributing

We welcome community contributions to make Vocals even better!

1. Fork the repo
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m "Add your feature"`
4. Push to your fork: `git push origin feature/your-feature-name`
5. Open a pull request and describe your changes

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).

---

## 🙌 Acknowledgments

Thanks to the open-source community for tools, libraries, and support that make projects like this possible.

> Made with ❤️ to help everyone speak freely and confidently.
