"use client";
import { usePathname } from "next/navigation";
import React, { Suspense } from "react";
import { Exercises } from "@/data/cardio-exercises";
import IFrame from "./IFrame";

export default function CardioExercises() {
  const pathname = usePathname();
  const data = Exercises.filter((item) => item.url === pathname);
  console.log(data);

  return (
    <>
      <div className="flex flex-col bg-card px-3 border-2 rounded">
        <div>
          <h1 className="text-4xl m-5 ml-0 text-primary font-bold">
            {data[0].exName}
          </h1>
        </div>
        <div>
          <Suspense fallback={<p>Loading video...</p>}>
            <IFrame className="w-[1000px]" src={data[0].videoLink} title={data[0].exName} />
          </Suspense>
        </div>
        <div>
          <p className="m-5 ml-6 text-lg w-[1000px]">{data[0].text}</p>
          <ul className="list-decimal list-outside m-5 px-5 py-3 w-[1000px]">
            {data[0].steps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
