import Image from "next/image";
import { Star, Truck } from "lucide-react";

import CheckoutNow from "@/components/CheckoutNow";
import ImageGallery from "@/components/ImageGallery";
import { Button } from "@/components/ui/button";
import { MainProducts } from "@/data/main-products";
import Navbar from "@/components/Navbar";
import AddToBag from "@/components/AddToBag";
import { redirect } from "next/dist/server/api-utils";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = MainProducts.flat().find(
    (product) => product.slug === params.slug
  );

  return (
    <>
      <Navbar />
      {data === undefined ? (
        <div className="text-9xl text-center min-h-[80vh] flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={
                "https://cdni.iconscout.com/illustration/premium/thumb/no-data-found-8867280-7265556.png?f=webp"
              }
              width={500}
              height={500}
              alt={"No data found"}
            />
            <h1>NO DATA FOUND</h1>
          </div>
        </div>
      ) : (
        <div className="bg-card h-[88vh]">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8 ">
            <div className="grid gap-8 md:grid-cols-2">
              <ImageGallery images={data.images} />
              <div className="md:py-8 ">
                <div className="mb-2 md:mb-3">
                  <span className="mb-0.5 inline-block text-gray-400">
                    {data.categoryName}
                  </span>
                  <h2 className="text-2xl font-bold text-foreground lg:text-3xl">
                    {data.name}
                  </h2>
                </div>

                <div className="mb-6 flex items-center gap-3 md:mb-10">
                  <Button className="rounded-full gap-x-2 ">
                    <span className="text-sm">{data.rate}</span>
                    <Star className="h-5 w-5 text-yellow-500 stroke-yellow-500" />
                  </Button>

                  <span className="text-sm text-gray-400 transition duration-100">
                    {data.ratings} Ratings
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex items-end gap-2">
                    <span className="text-xl font-bold text-foreground md:text-2xl">
                      {data.price}TL
                    </span>
                    <span className="mb-0.5 text-red-500 line-through">
                      {data.price + 30}TL
                    </span>
                  </div>

                  <span className="text-sm text-gray-400">{data.shipping}</span>
                </div>

                <div className="mb-6 flex items-center gap-2 text-gray-400">
                  <Truck className="w-6 h-6" />
                  <span className="text-sm">2-4 Day Shipping</span>
                </div>

                <div className="flex gap-2.5">
                  <AddToBag
                    currency="TL"
                    description={data.description}
                    image={data.images[0]}
                    name={data.name}
                    price={data.price}
                    key={data._id}
                  />

                  <CheckoutNow
                    currency="TL"
                    description={data.description}
                    image={data.images[0]}
                    name={data.name}
                    price={data.price}
                    key={data._id}
                  />
                </div>

                <p className="mt-12 text-base text-gray-400 tracking-wide">
                  {data.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
