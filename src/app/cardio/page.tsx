import React from "react";
import CardioExercisesPage from "@/components/CardioList";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Cardio() {
  return (
    <div>
      <ModeToggle />
      <CardioExercisesPage />
    </div>
  );
}
