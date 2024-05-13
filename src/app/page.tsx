import CalCalories from "@/components/CalCalories";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import { ModeToggle } from "@/components/ui/mode-toggle";
import MealPlan from "@/components/MealPlans";
import MainNavbar from "@/components/MainNavbar";
import Cardio from "./cardio/page";
import Newest from "@/components/Newest";
import NewestMeals from "@/components/NewestMeals";

export default function Home() {
  return (
    <div>
      <MainNavbar />
      <Hero />
      <div className="md:py-8">
        <CalCalories />
      </div>
      <Newest />
      <NewestMeals />
    </div>
  );
}
