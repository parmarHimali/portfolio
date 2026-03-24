import type { Metadata } from "next";
import { Inter, Carter_One } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const carterOne = Carter_One({
  variable: "--font-carter",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Himali Parmar | Frontend Developer",
  description: "Turning ideas into fast, scalable web applications with React & Next.js.",
  keywords: ["React Developer", "Next.js", "Frontend Portfolio", "Software Engineer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${carterOne.variable}`} suppressHydrationWarning>
        <div className="noise-overlay"></div>
        {children}
      </body>
    </html>
  );
}
