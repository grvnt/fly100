'use client';

import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Initialize Supabase client
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

const ParaglidingDashboard = () => {
  const [flightData, setFlightData] = useState([]);
  const [goals, setGoals] = useState({
    annualFlightTime: 1000,
    longestFlight: 100,
  });
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    fetchFlightData();
    fetchGoals();
  }, []);

  const fetchFlightData = async () => {
    const { data, error } = await supabase
      .from('flights')
      .select('*')
      .order('date', { ascending: true });

    if (error) console.error('Error fetching flight data:', error);
    else setFlightData(data || []);
  };

  const fetchGoals = async () => {
    const { data, error } = await supabase
      .from('goals')
      .select('*')
      .single();

    if (error) console.error('Error fetching goals:', error);
    else setGoals(data || { annualFlightTime: 1000, longestFlight: 100 });
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) setFile(file);
  };

  const uploadTracklog = async () => {
    if (!file) return;

    const { error } = await supabase.storage
      .from('tracklogs')
      .upload(`${Date.now()}_${file.name}`, file);

    if (error) {
      console.error('Error uploading tracklog:', error);
    } else {
      console.log('Tracklog uploaded successfully');
      // Here you would typically trigger a server-side function to parse the tracklog
      // and update the flights table in Supabase
    }
  };

  const updateGoal = async (goalType: string, value: number) => {
    const { data, error } = await supabase
      .from('goals')
      .update({ [goalType]: value })
      .eq('id', (goals as any).id);

    if (error) console.error('Error updating goal:', error);
    else fetchGoals();
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Annual Flight Time Goal</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{goals.annualFlightTime} minutes</p>
            <p>Current: {flightData.reduce((sum: number, flight: any) => sum + flight.flightTime, 0)} minutes</p>
            <Input
              type="number"
              value={goals.annualFlightTime}
              onChange={(e) => updateGoal('annualFlightTime', Number(e.target.value))}
              className="mt-2"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Longest Flight Goal</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{goals.longestFlight} km</p>
            <p>Current: {Math.max(...flightData.map((flight: any) => flight.distance))} km</p>
            <Input
              type="number"
              value={goals.longestFlight}
              onChange={(e) => updateGoal('longestFlight', Number(e.target.value))}
              className="mt-2"
            />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Flight Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={flightData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="flightTime" stroke="#8884d8" name="Flight Time (min)" />
              <Line yAxisId="right" type="monotone" dataKey="distance" stroke="#82ca9d" name="Distance (km)" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Upload Tracklog</CardTitle>
        </CardHeader>
        <CardContent>
          <Input type="file" onChange={handleFileUpload} className="mb-2" />
          <Button onClick={uploadTracklog}>Upload</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ParaglidingDashboard;
