import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Brain} from "lucide-react";
import Navigation from "@/components/layout/Navigation.tsx";

const formSchema = z.object({
  age: z.string(),
  primaryConcern: z.string(),
  duration: z.string(),
  previousTherapy: z.string(),
  history: z.string().optional(),
});

const Assessment = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [content, setContent] = useState({
    title: "Daily Exercises",
    description: "Complete your daily speech exercises",
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: "",
      primaryConcern: "",
      duration: "",
      previousTherapy: "no",
      history: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const userName = localStorage.getItem("loggedIn")

      const dataToSend = {
        ...values,
        username: userName["name"],
      }
      const response = await fetch("http://localhost:5000/getPrimaryAnalysis", {
        method: "POST", // Ensure it's a POST request
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend), // Convert formData to JSON
      });

      if (!response.ok) {
        throw new Error("Failed to submit assessment");
      }

      const result = await response.json();
      setIsVisible(true);
      setContent({
            title: "Your Analysis Report",
            description: result
        })
      localStorage.setItem("analysisResult", JSON.stringify(result));
      console.log("Analysis Saved:", result);
    } catch (error) {
      console.error("Error submitting assessment:", error);
    }
  }


  return (
      <div>
          <Navigation />
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-2xl mx-auto space-y-8 py-8">
          <div>
            <h1 className="text-3xl font-bold">Initial Assessment</h1>
            <p className="text-muted-foreground mt-2">
              Help us understand your needs better
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                      <FormItem>
                        <FormLabel>Age</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="Enter your age" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                  )}
              />

              <FormField
                  control={form.control}
                  name="primaryConcern"
                  render={({ field }) => (
                      <FormItem>
                        <FormLabel>What is your primary speech concern?</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your primary concern" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="stuttering">Stuttering</SelectItem>
                              <SelectItem value="pronunciation">Pronunciation</SelectItem>
                              <SelectItem value="voice">Voice Issues</SelectItem>
                              <SelectItem value="aphasia">Aphasia</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                  )}
              />

              <FormField
                  control={form.control}
                  name="duration"
                  render={({ field }) => (
                      <FormItem>
                        <FormLabel>How long have you experienced this?</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select duration" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="less-than-6-months">Less than 6 months</SelectItem>
                              <SelectItem value="6-12-months">6-12 months</SelectItem>
                              <SelectItem value="1-3-years">1-3 years</SelectItem>
                              <SelectItem value="more-than-3-years">More than 3 years</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                  )}
              />

              <FormField
                  control={form.control}
                  name="previousTherapy"
                  render={({ field }) => (
                      <FormItem>
                        <FormLabel>Have you had speech therapy before?</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select yes or no" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                  )}
              />

              <FormField
                  control={form.control}
                  name="history"
                  render={({ field }) => (
                      <FormItem>
                        <FormLabel>Other Remarks or History</FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="Enter any additional remarks" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                  )}
              />

              <Button type="submit" className="w-full">
                Complete Assessment
              </Button>
            </form>
          </Form>

          {isVisible && (
              <Card className="hover:shadow-lg transition-shadow mt-4">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">{content.title}</CardTitle>
                  <CardDescription>{content.description}</CardDescription>
                </CardHeader>
                <CardContent>
                </CardContent>
              </Card>
          )}
        </div>
      </div>
      </div>
  );
};

export default Assessment;