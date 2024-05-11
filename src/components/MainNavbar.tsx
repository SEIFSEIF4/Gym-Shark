"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AlignJustify, Menu, ShoppingBag } from "lucide-react";
import { ModeToggle } from "./ui/mode-toggle";

const links = [
  { name: "Home", href: "/" },
  { name: "Cardio", href: "/cardio" },
  { name: "Meals Plan", href: "/Meals-Plan" },
  { name: "Calc", href: "/Calc" },
];

export default function MainNavbar() {
  const pathname = usePathname();
  return (
    <header className="border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold">
            Gym<span className="text-primary">Shark</span>
          </h1>
        </Link>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
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
                  className="text-lg font-semibold text-foreground transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-5 h-12 sm:h-20 md:h-24">
          <ModeToggle />
          <Button variant={"outline"} className="max-w-[40px] max-h-[40px] p-2">
            <Menu />
          </Button>
        </div>
      </div>
    </header>
  );
}
