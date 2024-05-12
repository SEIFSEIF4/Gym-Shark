"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function NavModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="">
      <Button
        className="flex flex-row justify-between gap-5 p-0 m-0 text-primary dark:text-primary-dark font-semibold"
        variant="link"
        onClick={toggleTheme}
      >
        <span className="sr-only">Toggle theme</span>
        {theme === "dark" ? "Light" : "Dark"} mode
      </Button>
    </div>
  );
}
