import type { Metadata } from "next";
import { Crimson_Pro, Manrope } from "next/font/google";
import "./globals.css";

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sarthak Godse | Portfolio",
  description: "Full-stack developer and software engineer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${crimsonPro.variable} ${manrope.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
