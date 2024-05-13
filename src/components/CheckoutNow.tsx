"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { ProductCart } from "./AddToBag";
import toast from "react-hot-toast";

export default function CheckoutNow({
  currency,
  description,
  image,
  name,
  price,
}: ProductCart) {
  const { checkoutSingleItem } = useShoppingCart();

  function buyNow(priceId: string) {
    checkoutSingleItem(priceId);
  }

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    // image: urlFor(image).url(),
  };
  return (
    <Button
      variant="outline"
      onClick={() => {
        // buyNow(product.price_id);
        toast.error("Payment is disabled in development.");
      }}
    >
      Checkout Now
    </Button>
  );
}
