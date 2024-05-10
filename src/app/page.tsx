import CalCalories from "@/components/CalCalories";
import CardioExercises from "@/components/CardioList";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Home() {
  return (
    <div>
      <ModeToggle />
      {/* <CardioExercises /> */}
      <CalCalories />
    </div>
  );
}
