
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Navigation from '@/components/layout/Navigation';

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Speech Pathologist",
    description: "Specializing in stuttering, pronunciation, and voice disorders.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=300&h=300"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Language Therapist",
    description: "Expert in childhood speech development and disorders.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&h=300"
  },
  {
    id: 3,
    name: "Dr. Emily Williams",
    specialty: "Voice Specialist",
    description: "Focused on voice rehabilitation and accent modification.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=300&h=300"
  }
];

const DoctorSearch = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      <Navigation />
      <div className="max-w-7xl mx-auto space-y-8 p-8">
        <div className="animate-fadeIn">
          <h1 className="text-3xl font-bold text-foreground">Find a Speech Therapist</h1>
          <p className="text-muted-foreground mt-2">
            Connect with qualified speech therapy professionals
          </p>
        </div>

        <div className="flex gap-4 mb-8 animate-slideUp">
          <div className="flex-1">
            <Input placeholder="Search by name, specialty, or location" />
          </div>
          <Button>
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <Card key={doctor.id} className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-fadeIn">
              <img 
                src={doctor.image} 
                alt={doctor.name}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{doctor.name}</CardTitle>
                <CardDescription>{doctor.specialty}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {doctor.description}
                </p>
                <Button className="w-full transition-all duration-300 hover:scale-105">
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorSearch;
