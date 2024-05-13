"use client";
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Meals } from "@/data/meals-plan";
import Link from "next/link";
export default function MealPlans() {
  return (
    <div className="gap-5 grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 2xl:grid-cols-5 p-20 ">
      {Meals.map((item, index) => (
        <Link href={`/meals-plan/meal`} key={index}>
          <Card
            shadow="md"
            key={index}
            isPressable
            className={`hover:opacity-75 hover:text-primary duration-500 animate-in animate fade-in-5 slide-in-from-bottom-2.5 ${
              index % 2 === 0
                ? "animate-in animate fade-in-5 slide-in-from-left-2.5"
                : "animate-in animate fade-in-5 slide-in-from-right-2.5"
            }`}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[250px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small flex-col gap-1 ">
              <p className="text-default-500">{item.description}</p>
              <p className="font-bold text-md">{item.title}</p>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
