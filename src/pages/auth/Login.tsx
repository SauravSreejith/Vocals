import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";



const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

import { useToast, toast } from "@/hooks/use-toast.ts"
function showToast(title: string, message: string) {
    toast({
        title: title,
        description: message,
    })
}

const Login = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await axios.post("http://localhost:5000/login", values);

      showToast("Success", "You have been logged in!");
        const getUser = await axios.get("http://localhost:5000/getUser", {
            params: { email: values.email }
        });

        const authStat = { state: true, name: getUser.data.name }

        localStorage.setItem("loggedIn", JSON.stringify(authStat));
      navigate('/dashboard');
    } catch (error) {
      showToast("Failed", "There was an error trying to log in.");
    }
  }

  return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Welcome Back</CardTitle>
            <CardDescription className="text-center">Sign in to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl><Input placeholder="Enter your email" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                )}/>
                <FormField control={form.control} name="password" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl><Input type="password" placeholder="Enter your password" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                )}/>
                <Button type="submit" className="w-full">Sign In</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
  );
};

export default Login;
