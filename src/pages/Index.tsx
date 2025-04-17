import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Activity, Brain, Heart } from "lucide-react";
import Navigation from '@/components/layout/Navigation';
import { useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'



const Index = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    const isLoggedIn = JSON.parse(localStorage.getItem("loggedIn"));
    const authState = isLoggedIn["state"]

    if (authState) {
      navigate("/dashboard");
    } else {
      navigate("/signup");
    }
  };
  
  const features = [
    {
      title: "Expert Therapists",
      description: "Connect with certified speech therapists for personalized care",
      icon: <MessageCircle className="w-6 h-6 text-primary" />,
    },
    {
      title: "Track Progress",
      description: "Monitor your improvement with detailed analytics and reports",
      icon: <Activity className="w-6 h-6 text-primary" />,
    },
    {
      title: "AI-Powered Practice",
      description: "Get instant feedback with our advanced speech recognition",
      icon: <Brain className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fadeIn">
          <span className="font-jetbrains font-extrabold">
          <Typewriter
            words={['Transform Your Speech Journey', 'Your Voice Matters!', 'From Sounds to Sentences.']}
            cursor
            loop={0}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
          </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fadeIn">
            Experience personalized speech therapy from the comfort of your home with expert guidance and AI-powered practice tools.
          </p>
          <Button 
            size="lg" 
            className="animate-slideUp transition-all duration-300 hover:scale-105"
            onClick={handleButtonClick}
          >
            Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-card shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeIn"
              >
                <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 animate-fadeIn">About VOCALS</h2>
            <p className="text-muted-foreground mb-8 animate-fadeIn">
              We are dedicated to making speech therapy accessible, engaging, and effective for everyone. 
              Our platform combines expert guidance with cutting-edge technology to help you achieve your communication goals.
            </p>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-slideLeft">
            <h3 className="text-2xl font-bold">Why Choose VOCALS?</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Heart className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Personalized Care</h4>
                  <p className="text-muted-foreground">Tailored therapy plans that adapt to your needs and progress.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Activity className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Track Your Progress</h4>
                  <p className="text-muted-foreground">Detailed analytics and progress tracking to keep you motivated.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="space-y-6 animate-slideRight">
            <h3 className="text-2xl font-bold">Our Approach</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MessageCircle className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Expert Guidance</h4>
                  <p className="text-muted-foreground">Work with certified speech therapists who care about your success.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Brain className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">AI-Powered Practice</h4>
                  <p className="text-muted-foreground">Use advanced technology to enhance your practice sessions.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
