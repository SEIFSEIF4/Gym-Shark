"use client";
import { usePathname } from "next/navigation";
import React, { Suspense } from "react";
import { Exercises } from "@/data/cardio-exercises";
import IFrame from "./IFrame";

export default function CardioExercises() {
  const pathname = usePathname();
  const data = Exercises.filter((item) => item.url === pathname);

  return (
    <>
      <div className="flex flex-col bg-card px-3 border-2 rounded w-full">
        <div>
          <h1 className=" text-[25px] md:text-4xl  m-2 md:m-5 ml-0 text-primary font-bold">
            {data[0].exName}
          </h1>
        </div>
        <div className="max-w-22">
          <Suspense fallback={<p>Loading video...</p>}>
            <IFrame
              className="w-full h-70"
              src={data[0].videoLink}
              title={data[0].exName}
            />
          </Suspense>
        </div>
        <div>
          <p className="md:m-5 md:ml-6 hidden sm:block text-lg">
            {data[0].text}
          </p>
          <ul className="list-decimal list-outside md:m-5 px-5 py-3 w-full">
            {data[0].steps.map((item) => (
              <li className="my-2" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
