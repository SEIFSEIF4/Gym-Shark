import { Inter as FontSans, Cairo, Noto_Sans_Mono } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const cairo = Cairo({
  subsets: ["latin"],
  variable: "--font-cairo",
});
export const notoSansMono = Noto_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-notoSansMono",
});
