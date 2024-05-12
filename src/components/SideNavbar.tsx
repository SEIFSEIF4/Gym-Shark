"use client";
import { navLinks } from "@/config/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type SideNavbarProps = {
  username?: string | null | undefined;
};

export default function SideNavbar({ username }: SideNavbarProps) {
  const pathname = usePathname();
  return (
    <div className="my-5">
      <h1 className="text-2xl pb-8 text-start font-bold">
        {username ? `Hello, ${username}` : `Hello,Guest`}
      </h1>
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
  );
}
