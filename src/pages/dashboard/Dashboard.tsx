
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Activity, Search, Brain, LineChart } from "lucide-react";
import Navigation from "@/components/layout/Navigation.tsx";

const Dashboard = () => {
  return (
      <div>
        <Navigation />
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-7xl mx-auto space-y-8 py-8">
        <div>
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-muted-foreground mt-2">
            Track your progress and continue your therapy journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link to="/exercises">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  Daily Exercises
                </CardTitle>
                <CardDescription>Complete your daily speech exercises</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full">Start Exercises</Button>
              </CardContent>
            </Card>
          </Link>

          <Link to="/doctors">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Find Therapists
                </CardTitle>
                <CardDescription>Connect with speech therapists</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full">Search Therapists</Button>
              </CardContent>
            </Card>
          </Link>

          <Link to="/progress">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LineChart className="h-5 w-5" />
                  Progress Report
                </CardTitle>
                <CardDescription>View your improvement over time</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full">View Progress</Button>
              </CardContent>
            </Card>
          </Link>

          <Link to="/assessment">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Assessment
                </CardTitle>
                <CardDescription>Update your speech assessment</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full">Start Assessment</Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
        </ div>
  );
};

export default Dashboard;
