import Link from "next/link";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { newestMeals } from "@/data/newest-meals";

export default async function NewestMeals() {
  const data = newestMeals;

  return (
    <div className="bg-card-500">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Check out or Meal Plans
          </h2>

          <Link
            className="text-primary flex items-center gap-x-1"
            href="store/all"
          >
            See All{" "}
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          {data.map((meal: any, index: number) => (
            <Link href={"/meals-plan/meal"} key={index}>
              <div className="group relative hover:opacity-75">
                <div className="aspect-square w-full overflow-hidden rounded-md bg-foreground-200  lg:h-80 border-1 border-gray-500 shadow-lg">
                  <Image
                    src={meal.img}
                    alt="Product image"
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                    width={300}
                    height={300}
                  />
                </div>

                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-foreground">
                      {meal.description}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
