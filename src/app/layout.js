import { Inter } from "next/font/google";
import "./globals.css";
import RootLayoutClient from "@/app/RootLayoutClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextShop - Your Premium Tech Marketplace",
  description:
    "Discover the best tech products at amazing prices. Built with Next.js 16.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
