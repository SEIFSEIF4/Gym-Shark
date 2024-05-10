"use client"

import React from 'react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function CalCalories() {
  return (
    <div>
        

        <Card className="w-[450px]">
            
      <CardHeader>
        <CardTitle>Calorie Calculator</CardTitle>
        <CardDescription>The Calorie Calculator can be used to estimate the number of calories a person needs to consume each day. 
            This calculator can also provide some simple guidelines for gaining or losing weight.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row gap-3">
            <h1>Gender: </h1>
            <RadioGroup defaultValue="option-one">
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
                <Label htmlFor="name">Height</Label>
                <Input id="name" placeholder="Enter your height(cm)" />
                </div>
                <div className="flex flex-col space-y-1.5 w-4/5">
                <Label htmlFor="name">Weight</Label>
                <Input id="name" placeholder="Enter your Weight(kg)" />
                </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Activity</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Basal Metabolic Rate (bmr)" />
                </SelectTrigger>
                <SelectContent position="popper">
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
      <CardFooter className="">
        <Button>Calculate</Button>
      </CardFooter>
    </Card>
    </div>
  )
}
