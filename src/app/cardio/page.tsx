"use client";
import React, { Suspense } from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Exercises } from "@/data/cardio-exercises";
import IFrame from "@/components/IFrame";

export default function Cardio() {
  return (
    <div className="gap-5 grid grid-cols-2 sm:grid-cols-3 p-20 ">
      {Exercises.map((item, index) => (
        <Card shadow="md" key={index}>
          <CardBody className="overflow-visible p-0">
            <Suspense fallback={<p>Loading video...</p>}>
              <IFrame src={item.videoLink} title={item.exName} />
            </Suspense>
          </CardBody>
          <CardFooter className="text-small flex-col gap-1 ">
            <p className="font-bold text-md">{item.exName}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
