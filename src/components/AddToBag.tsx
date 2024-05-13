"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { navigateLogin } from "@/actions/actions";
import toast from "react-hot-toast";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
}

export default function AddToBag({
  currency,
  description,
  image,
  name,
  price,
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();
  const { user } = useKindeBrowserClient();

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: image,
    sku: "",
  };
  return (
    <Button
      onClick={() => {
        if (!user) {
          toast.error("Please login to add to cart.");
          navigateLogin();
        } else {
          toast.success(`Added ${product.name} to cart.`);
          addItem(product), handleCartClick();
        }
      }}
    >
      Add To Cart
    </Button>
  );
}
