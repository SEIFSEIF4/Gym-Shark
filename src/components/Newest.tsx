import Link from "next/link";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { newestProducts } from "@/data/newest-products";

export default async function Newest() {
  const data = newestProducts;

  return (
    <div className="bg-card-500">
      <div className="mx-auto max-w-2xl p-12 lg:max-w-7xl">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Our Newest Products
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
          {data.map((product) => (
            <Link href={`store/product/${product.slug}`} key={product._id}>
              <div className="group relative hover:opacity-75">
                <div className="aspect-square w-full overflow-hidden rounded-md bg-foreground-200  lg:h-80 border-1 border-gray-500 shadow-lg">
                  <Image
                    src={product.images[0]}
                    alt="Product image"
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                    width={300}
                    height={300}
                  />
                </div>

                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-foreground">{product.name}</h3>
                    <p className="mt-1 text-sm text-foreground">
                      {product.slug} / {product.categoryName}
                    </p>
                  </div>
                  <p className="text-xm font-medium text-primary">
                    {product.price}TL
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
