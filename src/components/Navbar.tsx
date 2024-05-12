"use client";

import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import { storeLinks } from "@/config/site";
import { UserDropdown } from "./userDropdown";

export default function Navbar() {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();
  return (
    <header className="border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold">
            Gym<span className="text-primary">Shark</span>
          </h1>
        </Link>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {storeLinks.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className="text-lg font-semibold text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex divide-x border-r sm:border-l">
          {true ? (
            <div className="">
              <Button
                variant={"outline"}
                onClick={() => handleCartClick()}
                className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
              >
                <ShoppingBag />
                <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                  Cart
                </span>
              </Button>
              <UserDropdown
                userImage={
                  "https://i.pinimg.com/236x/cf/7a/71/cf7a712855a7fe44b3b28574bfb43076.jpg"
                }
              />
            </div>
          ) : (
            <div className="sm:h-20 sm:w-20 md:h-24">
              <LoginLink href="/login">
                <Button>Login</Button>
              </LoginLink>
              <RegisterLink href="/login">
                <Button>Getting Started</Button>
              </RegisterLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
