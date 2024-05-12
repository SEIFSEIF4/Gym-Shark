import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden pb-24 lg:py-32 duration-500 animate-in animate fade-in-5 slide-in-from-bottom-2.5">
        {/* Gradients */}
        <Image
          src="https://muffingroup.com/blog/wp-content/uploads/2022/09/victor-freitas-WvDYdXDzkhs-unsplash.png"
          alt="Picture of the author"
          width={1234}
          height={771}
          layout="responsive"
          className="absolute inset-0 z-0 object-cover w-full h-full"
        />
        <div
          aria-hidden="true"
          className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
        >
          {/* <div className="bg-gradient-to-r from-background/50 to-background blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]" /> */}
          {/* <div className="bg-gradient-to-tl blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] from-primary-foreground via-primary-foreground to-background" /> */}
        </div>
        {/* End Gradients */}
        <div className="relative z-10">
          <div className="container py-10 lg:py-16">
            <div className="max-w-2xl text-center mx-auto text-white">
              <p className="">Discover Our Premium Gym Experience</p>
              {/* Title */}
              <div className="mt-5 max-w-3xl">
                <h1 className="scroll-m-20 text-4xl font-extrabold text-white tracking-tight lg:text-5xl">
                  Transform Your Fitness Journey
                </h1>
              </div>
              {/* End Title */}
              <div className="mt-5 max-w-3xl">
                <p className="text-xl text-muted-foreground">
                Explore a range of cutting-edge fitness solutions designed to elevate your workouts and help you achieve your health and wellness goals
                </p>
              </div>
              {/* Buttons */}
              <div className="mt-8 gap-3 flex justify-center">
                <Button size={"lg"}>Go to Store</Button>
                <Button size={"lg"} variant={"outline"}>
                  Go to Cardio
                </Button>
              </div>
              {/* End Buttons */}
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}
