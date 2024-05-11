import CalCalories from "@/components/CalCalories";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="py-24">
        <CalCalories />
      </div>
    </div>
  );
}
