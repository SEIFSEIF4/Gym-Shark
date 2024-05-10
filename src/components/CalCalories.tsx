"use client";
import React, { useState } from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CaloriesResult from './CaloriesResult';

export default function CalCalories() {
  const [gender, setGender] = useState('option-one');
  const [Age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [activity, setActivity] = useState('');
  const [Result, setResult] = useState(0);

  const handleCalculate = () => {
    let bmr = 0;
    if (gender === 'option-one') { // Male
      bmr = 88.362 + (13.397 * parseFloat(weight)) + (4.799 * parseFloat(height)) - (5.677 * parseFloat(Age));
    } else { // Female
      bmr = 447.593 + (9.247 * parseFloat(weight)) + (3.098 * parseFloat(height)) - (4.330 * parseFloat(Age));
    }

    // Adjust the result based on activity level
    switch (activity) {
      case 'Sedentary':
        setResult(bmr);
        break;
      case 'Light':
        setResult(bmr + 0.15 * bmr);
        break;
      case 'Active':
        setResult(bmr + 0.22 * bmr);
        break;
      case 'Moderate':
        setResult(bmr + 0.29 * bmr);
        break;
      case 'VeryActive':
        setResult(bmr + 0.38 * bmr);
        break;
      case 'Extra':
        setResult(bmr + 0.45 * bmr);
        break;
      default:
        setResult(bmr);
        break;
    }
  };

  const handleClear = () => {
    setResult(0);
    setAge('');
    setHeight('');
    setWeight('');
    setActivity('');
  };

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Calorie Calculator</CardTitle>
          <CardDescription>The Calorie Calculator can be used to estimate the number of calories a person needs to consume each day. 
            This calculator can also provide some simple guidelines for gaining or losing weight.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="Age">Age</Label>
              <Input id="Age" placeholder="Enter your Age" value={Age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <h1>Gender:</h1>
            <RadioGroup onChange={(e) => setGender((e.target as HTMLInputElement).value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Female</Label>
              </div>
            </RadioGroup>
          </div>
          <form>
            <div className="flex flex-col w-full gap-4 mt-3">
              <div className="flex flex-row gap-3">
                <div className="flex flex-col space-y-1.5 w-4/5">
                  <Label htmlFor="height">Height</Label>
                  <Input id="height" placeholder="Enter your height(cm)" value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>
                <div className="flex flex-col space-y-1.5 w-4/5">
                  <Label htmlFor="weight">Weight</Label>
                  <Input id="weight" placeholder="Enter your Weight(kg)" value={weight} onChange={(e) => setWeight(e.target.value)} />
                </div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="activity">Activity</Label>
                <Select>
                  <SelectTrigger id="activity">
                    <SelectValue placeholder="Basal Metabolic Rate (bmr)" />
                  </SelectTrigger>
                  <SelectContent position="popper" onChange={(e) => setActivity((e.target as HTMLSelectElement).value)}>
                    <SelectItem value="Sedentary">Sedentary: little or no exercise</SelectItem>
                    <SelectItem value="Light">Light: exercise 1-3 times/week</SelectItem>
                    <SelectItem value="Active">Active: intense exercise 3-4 times/week</SelectItem>
                    <SelectItem value="Moderate">Moderate: exercise 4-5 times/week</SelectItem>
                    <SelectItem value="VeryActive">Very active: intense exercise 6-7 times/week</SelectItem>
                    <SelectItem value="Extra">Extra active: very intense exercise, or physical job</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <div className="flex flex-row gap-5">
            <Button onClick={handleCalculate}>Calculate</Button>
            <Button onClick={handleClear}>Clear</Button>
          </div>
        </CardFooter>
      </Card>
      <CaloriesResult 
        text1={Result}
        text2={Result * 0.9}
        text3={Result * 0.79}
        text4={Result * 0.59}
      />
    </div>
  );
}
