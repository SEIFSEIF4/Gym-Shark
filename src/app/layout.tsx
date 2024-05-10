import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers";
import Navbar from "@/components/Navbar";
import CartProvider from "@/components/CartProvider";
import ShoppingCartModal from "@/components/ShoppingCartModal";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
          <CartProvider>
            <Navbar />
            <main className="max-w-screen-7xl">{children}</main>
            <ShoppingCartModal />
            <Toaster />
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}
