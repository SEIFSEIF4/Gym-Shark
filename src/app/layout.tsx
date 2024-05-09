import type { Metadata } from "next";
import { fontSans, cairo } from "@/config/fonts";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "Gym Shark",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased ",
          fontSans.variable
        )}
      >
        <Providers
          themeProps={{ attribute: "class", defaultTheme: "system", children }}
        >
          <main className="max-w-screen-7xl">
            {/* <Navbar /> */}
            {children}
          </main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
