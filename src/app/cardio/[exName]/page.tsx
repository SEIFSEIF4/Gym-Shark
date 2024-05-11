import CardioExercisesHeader from "@/components/CardioExercisesHeader";
import ExercisesList from "@/components/ExercisesList";
import React from "react";

export default function SingleExercises({
  params,
}: {
  params: { exName: string };
}) {
  console.log(params);
  return (
    <div className="max-w-7xl flex flex-col m-auto mt-10">
      <h1 className="text-7xl text-secondary-200">{params.exName}</h1>
      <ExercisesList />
    </div>
  );
}
