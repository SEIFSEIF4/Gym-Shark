"use client";
import Link from "next/link";
import React from "react";
import { Exercises } from "@/data/cardio-exercises";
import { usePathname } from "next/navigation";

export default function ExercisesList() {
  const pathname = usePathname();
  return (
    <div>
      <ul className="list-disc max-w-md bg-card bg-opacity-40  m-5 mt-3 list-outside border-2 rounded">
        <h1 className="text-xl px-3 pt-4">
          Cardio Exercises You Can Do at Home
        </h1>
        <div className="pl-12 pt-3 pb-4 text-primary">
          {Exercises.map((item, index) => (
            <li
              key={index}
              className={`text-lg ${pathname === item.url ? "text-white" : ""}`}
            >
              <Link
                href={item.url}
                className={`text-primary ${
                  pathname === item.url ? "text-white" : ""
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
