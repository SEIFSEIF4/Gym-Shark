"use client";
import { usePathname } from "next/navigation";
import React, { Suspense } from "react";
import { Exercises } from "@/data/cardio-exercises";
import IFrame from "./IFrame";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function CardioExercises() {
  const pathname = usePathname();
  const data = Exercises.filter((item) => item.url === pathname);
  console.log(data);

  return (
    <>
      {/* <Breadcrumb className="fixed top-0 left-0">
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">
              <BreadcrumbLink>Home</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link href="/cardio">
              <BreadcrumbLink>Cardio</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{data[0].exName}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb> */}
      <div className="flex flex-col bg-card pl-3 border-2 rounded">
        <div>
          <h1 className="text-4xl m-5 ml-0 text-primary">{data[0].exName}</h1>
        </div>
        <div className="">
          <Suspense fallback={<p>Loading video...</p>}>
            <IFrame src={data[0].videoLink} title={data[0].exName} />
          </Suspense>
        </div>
        <div>
          <p className="m-5 ml-0">{data[0].text}</p>
          <ul className="list-decimal list-outside m-5 px-5 py-3">
            {data[0].steps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
