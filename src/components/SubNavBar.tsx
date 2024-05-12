"use client";
import { storeLinks, navLinks } from "@/config/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type SubNavBarProps = {
  isStore: boolean;
};

export default function SubNavBar({ isStore }: SubNavBarProps) {
  const pathname = usePathname();
  const links = isStore ? storeLinks : navLinks;
  return (
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
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
            >
              {link.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
