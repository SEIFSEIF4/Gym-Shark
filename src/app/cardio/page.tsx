import React, { Suspense } from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Exercises } from "@/data/cardio-exercises";
import MainNavbar from "@/components/MainNavbar";
import Link from "next/link";
import CardioExercisesHeader from "@/components/CardioExercisesHeader";
import Footer from "@/components/Footer";

export default function Cardio() {
  return (
    <>
      <MainNavbar />
      <CardioExercisesHeader />
      <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-12 my-5 lg:px-40 xl:px-48">
        {Exercises.map((item, index) => (
          <Link href={item.url} key={index}>
            <Card
              shadow="md"
              key={index}
              className={`hover:opacity-75 hover:text-primary duration-500 animate-in animate fade-in-5 slide-in-from-bottom-2.5 ${
                index % 2 === 0
                  ? "animate-in animate fade-in-5 slide-in-from-left-2.5"
                  : "animate-in animate fade-in-5 slide-in-from-right-2.5"
              } delay-[${index * 100}ms]`}
            >
              <CardBody className="overflow-visible p-0">
                <Suspense fallback={<p>Loading video...</p>}>
                  <div className="">
                    <Image
                      shadow="sm"
                      radius="lg"
                      width="100%"
                      alt={item.exName}
                      className="w-full object-none object-center sm:object-cover h-[200px]"
                      src={item.thumbnail}
                    />
                  </div>
                </Suspense>
              </CardBody>
              <CardFooter className="text-small flex-col gap-1 ">
                <p className="font-bold text-lg">{item.exName}</p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
}
