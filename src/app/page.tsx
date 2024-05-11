import CalCalories from "@/components/CalCalories";
import Hero from "@/components/Hero";
import Newest from "@/components/Newest";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Home() {
  return (
    <div className="pb-6 sm:pb-8 lg:pb-12">
      {/* <Hero />
      <Newest /> */}
      <ModeToggle />
      {/* <CardioExercises /> */}
      <CalCalories />
    </div>
  );
}