import Navbar from "@/components/Navbar";
import Newest from "@/components/Newest";
import Hero from "@/components/StoreHero";
import React from "react";

export default function Store() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Newest />
    </div>
  );
}
