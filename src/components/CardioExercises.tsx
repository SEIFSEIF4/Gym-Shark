"use client";
import { usePathname } from "next/navigation";
import React, { Suspense } from "react";
import { Exercises } from "@/data/cardio-exercises";
import IFrame from "./IFrame";

export default function CardioExercises() {
  const pathname = usePathname();
  const data = Exercises.filter((item) => item.url === pathname);

  return (
    <div className="flex flex-col bg-card pl-3 border-2 rounded">
      <div>
        <h1 className="text-4xl m-5 ml-0 text-primary">1.Frog jumps</h1>
      </div>
      <div className="">
        <Suspense fallback={<p>Loading video...</p>}>
          <IFrame src={data[0].videoLink} title={data[0].exName} />
        </Suspense>
      </div>
      <div>
        <p className="m-5 ml-0">
          Frog jumps are an advanced high-intensity cardio exercise that gets
          your heart rate up quickly using low-body power and endurance
        </p>
        <ul className="list-decimal list-outside m-5 px-5 py-3">
          <li>
            Place your feet about hip-width apart, and squat low enough that you
            can put your hands on the floor in front of you.
          </li>
          <li>
            Explode and jump up, using your glutes, quads, and hamstrings to
            generate power.
          </li>
          <li>
            Tap your heels together as you jump and take the hands behind your
            head or up in the air.
          </li>
          <li>
            Land with bent knees to protect your joints and get into your squat
            to prepare for the next jump.
          </li>
          <li>Repeat 10 to 20 frog jumps. Rest and repeat if desired.</li>
        </ul>
      </div>
    </div>
  );
}
