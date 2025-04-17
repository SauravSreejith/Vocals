
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/layout/Navigation.tsx";

const Exercises = () => {
  return (
      <div>
        <Navigation />
        <div className="min-h-screen bg-background p-4">
      <div className="max-w-7xl mx-auto space-y-8 py-8">
        <div>
          <h1 className="text-3xl font-bold">Daily Exercises</h1>
          <p className="text-muted-foreground mt-2">
            Complete your personalized speech exercises
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Reading Exercise */}
          <Card>
            <CardHeader>
              <CardTitle>Reading Practice</CardTitle>
              <CardDescription>Read the passage aloud and record yourself</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">
                "The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs."
              </p>
              <Button className="w-full">Start Recording</Button>
            </CardContent>
          </Card>

          {/* Pronunciation Exercise */}
          <Card>
            <CardHeader>
              <CardTitle>Pronunciation Drill</CardTitle>
              <CardDescription>Practice specific sound combinations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">
                Focus on: "th", "sh", and "ch" sounds
              </p>
              <Button className="w-full">Start Practice</Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Daily Progress</CardTitle>
            <CardDescription>Track your exercise completion</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>2/5 exercises completed</span>
              </div>
              <Progress value={40} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
      </div>
  );
};

export default Exercises;
