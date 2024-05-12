"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { ModeToggle } from "./ui/mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/config/site";

export default function MainNavbar() {
  const pathname = usePathname();
  return (
    <>
      <header className="border-b">
        <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
          <Link href="/">
            <h1 className="text-2xl md:text-4xl font-bold">
              Gym<span className="text-primary">Shark</span>
            </h1>
          </Link>

          <nav className="hidden gap-12 lg:flex 2xl:ml-16">
            {navLinks.map((link, idx) => (
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
            <Sheet>
              <SheetTrigger className="max-w-[40px] max-h-[40px] p-[5px] border-1 rounded-md">
                <Menu />
              </SheetTrigger>
              <SheetContent className="max-w-[250px]">
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/">
                      <h1 className="text-2xl md:text-4xl font-bold">
                        Gym<span className="text-primary">Shark</span>
                      </h1>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-5">
                  {navLinks.map((link, idx) => (
                    <li key={idx}>
                      {pathname === link.href ? (
                        <Link
                          className="text-2xl py-3 font-semibold text-primary"
                          href={link.href}
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-2xl my-1 py-3 font-semibold text-foreground transition duration-100 hover:text-primary"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
