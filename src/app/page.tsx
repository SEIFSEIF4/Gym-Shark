import CalCalories from "@/components/CalCalories";
import Hero from "@/components/sections/Hero";
import MainNavbar from "@/components/MainNavbar";
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
