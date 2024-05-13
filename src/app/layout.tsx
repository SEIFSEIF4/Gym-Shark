import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers";
import CartProvider from "@/components/CartProvider";
import ShoppingCartModal from "@/components/ShoppingCartModal";
import Footer from "@/components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Gym Shark",
  description:
    "Explore a range of cutting-edge fitness solutions designed to elevate your workouts and help you achieve your health and wellness goals",
  manifest: "/manifest.json",
  icons: {
    icon: ["favicon16x16.png"],
    apple: ["/apple-touch-icon.png"],
  },
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
            <main className="max-w-screen-7xl">{children}</main>
            <Footer />
            <ShoppingCartModal />
            <Toaster />
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}
