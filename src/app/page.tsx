import CalCalories from "@/components/CalCalories";
import CardioExercises from "@/components/CardioList";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CardioExercises />
    </div>
  );
}
