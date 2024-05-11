"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface InfoCardProps {
  maintainWeight: number;
  mildWeightLoss: number;
  WeightLoss: number;
  extremeWeightLoss: number;
}

export default function ({
  maintainWeight,
  mildWeightLoss,
  WeightLoss,
  extremeWeightLoss,
}: InfoCardProps) {
  return (
    <div>
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Your Result</CardTitle>
          <CardDescription>
            The results show a number of daily calorie estimates that can be
            used as a guideline for how many calories to consume each day to
            maintain, lose, or gain weight at a chosen rate.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col  w-4/5 m-auto gap-3  ">
            <div className="flex flex-row justify-between border-1 border-secondary p-2">
              <p>Maintain weight </p>
              <p className="text-primary">{maintainWeight}</p>
            </div>
            <div className="flex flex-row justify-between border-1 border-secondary p-2">
              <p>Mild weight loss </p>
              <p className="text-primary">{mildWeightLoss}</p>
            </div>
            <div className="flex flex-row justify-between border-1 border-secondary p-2">
              <p>Weight loss </p>
              <p className="text-primary">{WeightLoss}</p>
            </div>
            <div className="flex flex-row justify-between border-1 border-secondary p-2">
              <p>Extreme weight loss </p>
              <p className="text-primary">{extremeWeightLoss}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
