import Link from "next/link";

import { MainProducts } from "@/data/main-products";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const dynamic = "force-dynamic";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  let data = [];

  if (params.category === "all") {
    data = MainProducts.flat();
  } else {
    data = MainProducts.flat().filter(
      (product) => product.categoryName === params.category
    );
  }

  const randomSort = () => Math.random() - 0.5;
  data.sort(randomSort);

  return (
    <>
      <Navbar />
      <div className="bg-card pb-5">
        <div className="mx-auto max-w-2xl px-4 sm:px-6  lg:max-w-7xl lg:px-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mt-3">
              Our Products for {params.category}
            </h2>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
            {data.map((product) => (
              <div key={product._id} className="group relative">
                <Link href={`/store/product/${product.slug}`}>
                  <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80 border-1 border-gray-400 shadow-lg">
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
                      <h3 className="text-sm text-foreground">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-400">
                        {product.categoryName}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.price}TL
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
