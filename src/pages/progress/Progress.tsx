
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Mon', score: 4 },
  { day: 'Tue', score: 3 },
  { day: 'Wed', score: 5 },
  { day: 'Thu', score: 6 },
  { day: 'Fri', score: 4 },
  { day: 'Sat', score: 7 },
  { day: 'Sun', score: 8 },
];

const Progress = () => {
  return (
      <div>
        <div className="min-h-screen bg-background p-4">
          <div className="max-w-7xl mx-auto space-y-8 py-8">
            <div>
              <h1 className="text-3xl font-bold">Progress Report</h1>
              <p className="text-muted-foreground mt-2">
                Track your improvement over time
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Weekly Progress</CardTitle>
                <CardDescription>Your speech improvement score over the past week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                      <CartesianGrid strokeDasharray="3 3"/>
                      <XAxis dataKey="day"/>
                      <YAxis/>
                      <Tooltip/>
                      <Line
                          type="monotone"
                          dataKey="score"
                          stroke="#4A90E2"
                          strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Pronunciation</CardTitle>
                  <CardDescription>Accuracy Score</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-primary">85%</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Fluency</CardTitle>
                  <CardDescription>Words per Minute</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-primary">120</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Consistency</CardTitle>
                  <CardDescription>Exercise Completion</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-primary">92%</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Progress;
