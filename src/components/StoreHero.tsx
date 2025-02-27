import { heroProducts } from "@/data/hero-products";
import Image from "next/image";
import Link from "next/link";

export default async function Hero() {
  const data = heroProducts;
  return (
    <section className="mx-auto max-w-2xl px-4 sm:py-6 lg:max-w-7xl lg:px-8 border-b-2">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="my-6 text-4xl font-bold text-foreground sm:text-5xl md:mb-8 md:text-6xl">
            Top Fashion for a top price!
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            We sell only the most exclusive and high quality products for you.
            We are the best so come and shop with us.
          </p>
        </div>

        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3 justify-center">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              src={data[0].imageUrl}
              alt={data[0].alt}
              className="h-full w-full object-cover object-center"
              priority
              width={500}
              height={500}
            />
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src={data[1].imageUrl}
              alt={data[1].alt}
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-[400px] divide-x overflow-hidden rounded-lg border">
          <Link
            href="/store/supplements"
            className="flex w-1/3 items-center justify-center text-foreground hover:text-black transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Supplements
          </Link>
          <Link
            href="/store/accessories"
            className="flex w-1/3 items-center justify-center text-foreground hover:text-black transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Accessories
          </Link>
          <Link
            href="/store/equipments"
            className="flex w-1/3 items-center justify-center text-foreground hover:text-black transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Equipments
          </Link>
        </div>
      </div>
    </section>
  );
}
