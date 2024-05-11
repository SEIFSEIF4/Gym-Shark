import React from "react";
import ExercisesList from "@/components/ExercisesList";
import CardioExercisesComponent from "@/components/CardioExercises";
import CardioExercisesHeader from "./CardioExercisesHeader";

export default function CardioExercisesPage() {
  return (
    <div className="flex flex-col m-auto mt-10">
      <CardioExercisesHeader />
      <div className="flex flex-col lg:flex-row gap-4 mt-5 w-11/12">
        <ExercisesList />
        {/* <CardioExercisesComponent /> */}
      </div>
    </div>
  );
}
