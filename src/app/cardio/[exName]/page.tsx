import CardioExercises from "@/components/CardioExercises";
import CardioExercisesHeader from "@/components/CardioExercisesHeader";
import ExercisesList from "@/components/ExercisesList";
import Footer from "@/components/Footer";
import MainNavbar from "@/components/MainNavbar";
import React from "react";

export default function SingleExercises({
  params,
}: {
  params: { exName: string };
}) {
  return (
    <>
      <MainNavbar />
      <div className="flex flex-col m-auto min-h-screen justify-center">
        <div className="flex flex-col lg:flex-row gap-4 mt-5 m-16 p-3 items-center md:items-start">
          <ExercisesList />
          <CardioExercises />
        </div>
      </div>
      <Footer />
    </>
  );
}
