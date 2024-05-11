import React from "react";
import ExercisesList from "@/components/ExercisesList";
import CardioExercisesComponent from "@/components/CardioExercises";
import CardioExercisesHeader from "./CardioExercisesHeader";

export default function CardioExercisesPage() {
  return (
    <div className="max-w-7xl flex flex-col m-auto mt-10">
      <CardioExercisesHeader />
      <ExercisesList />
      <CardioExercisesComponent />
    </div>
  );
}
