import CardioExercises from "@/components/CardioExercises";
import CardioExercisesHeader from "@/components/CardioExercisesHeader";
import ExercisesList from "@/components/ExercisesList";
import { ModeToggle } from "@/components/ui/mode-toggle";
import React from "react";

export default function SingleExercises({
  params,
}: {
  params: { exName: string };
}) {
  return (
    <div className="flex flex-col m-auto mt-10">
      <ModeToggle />
      <h1 className="text-5xl text-primary ">{params.exName}</h1>
      <div className="flex flex-col lg:flex-row gap-4 mt-5 w-11/12">
        <ExercisesList />
        <CardioExercises />
      </div>
    </div>
  );
}
