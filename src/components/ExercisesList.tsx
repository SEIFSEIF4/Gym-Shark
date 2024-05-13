"use client";
import Link from "next/link";
import React from "react";
import { Exercises } from "@/data/cardio-exercises";
import { usePathname } from "next/navigation";

export default function ExercisesList() {
  const pathname = usePathname();
  return (
    <div>
      <ul className="list-disc max-w-md min-w-[250px] bg-card bg-opacity-40 list-outside border-2 rounded">
        <h1 className="text-xl px-3 pt-4">Cardio Exercises</h1>
        <div className="pl-8 pt-3 pb-4 text-primary">
          {Exercises.map((item, index) => (
            <li
              key={index}
              className={`text-md md:text-lg ${
                pathname === item.url ? "text-foreground" : ""
              }`}
            >
              <Link
                href={item.url}
                className={`text-primary ${
                  pathname === item.url ? "text-foreground" : ""
                }`}
              >
                {item.exName}
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}
