"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface InfoCardProps {
  maintainWeight: number;
  mildWeightLoss: number;
  WeightLoss: number;
  extremeWeightLoss: number;
}

export default function InfoCard({
  maintainWeight,
  mildWeightLoss,
  WeightLoss,
  extremeWeightLoss,
}: InfoCardProps) {
  return (
    <div>
      <Card className="w-[350px] sm:w-[450px] md:w-[375px] lg:w-[480px] sm:min-h-[520px]">
        <CardHeader>
          <CardTitle>Your Result</CardTitle>
          <CardDescription>
            The results estimates for managing weight by advising on calorie
            intake for maintenance, loss, gain at a chosen pace.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col  w-4/5 m-auto gap-3">
            <div className="flex flex-row justify-between border-1 border-secondary p-2">
              <p>Maintain weight </p>
              <p className="text-primary">{maintainWeight} cal</p>
            </div>
            <div className="flex flex-row justify-between border-1 border-secondary p-2">
              <p>
                Mild weight{" "}
                <span className="text-xs text-gray-500">
                  {" "}
                  loss 0.25 kg/week
                </span>
              </p>
              <p className="text-primary">{mildWeightLoss} cal</p>
            </div>
            <div className="flex flex-row justify-between border-1 border-secondary p-2">
              <p>
                Weight loss{" "}
                <span className="text-xs text-gray-500"> loss 0.5 kg/week</span>
              </p>
              <p className="text-primary">{WeightLoss} cal</p>
            </div>
            <div className="flex flex-row justify-between border-1 border-secondary p-2">
              <p>
                Extreme weight{" "}
                <span className="text-xs text-gray-500"> loss 1 kg/week</span>
              </p>
              <p className="text-primary">{extremeWeightLoss} cal</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="w-4/5 m-auto">
          <Button variant="link" asChild className="p-0 hover:text-foreground">
            <Link href="/cardio">Try Our Cardio Exercises</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
