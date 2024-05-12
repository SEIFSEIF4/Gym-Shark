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
  price_id,
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
    price_id: price_id,
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
