"use client";
import React, { Suspense } from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Exercises } from "@/data/cardio-exercises";
import IFrame from "@/components/IFrame";

export default function Cardio() {
  return (
    <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-20 ">
      {Exercises.map((item, index) => (
        <Card shadow="md" key={index}>
          <CardBody className="overflow-visible p-0">
            <Suspense fallback={<p>Loading video...</p>}>
            <div className="sm:max-w-[253px] md:max-w-none">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.exName}
                className="w-full object-none md:object-cover h-[200px]"
                src={item.thumbnail}
              />
            </div>
            </Suspense>
          </CardBody>
          <CardFooter className="text-small flex-col gap-1 ">
            <p className="font-bold text-lg hover:text-primary">{item.exName}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
