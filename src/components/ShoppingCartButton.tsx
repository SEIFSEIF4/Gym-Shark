"use client";
import { Button } from '@nextui-org/react'
import { ShoppingBag } from 'lucide-react'
import React from 'react'
import { UserDropdown } from './userDropdown'
import { useShoppingCart } from 'use-shopping-cart';

interface ImageProps {
  Image: string | null;
}

export default function ShoppingCartButton({Image}:ImageProps) {
    const { handleCartClick } = useShoppingCart();
  return (
    <div className="flex flex-row gap-5">
              <Button
                variant="ghost"
                onClick={() => handleCartClick()}
                className="flex flex-col gap-y-1.5 w-16 h-12 rounded-none"
              >
                <ShoppingBag />
              </Button>
              <UserDropdown

                userImage={
                  Image 
                }
              />
            </div>
  )
}
