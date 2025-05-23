import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "./components/FireFliesBackground";
import Sound from "./components/Sound";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Supermercado+One&display=swap" rel="stylesheet" />
      </head>
      <body className={clsx(inter.variable, "bg-background text-foreground font-inter")}>{children}
        <FireFliesBackground/>
        <Sound/>
      </body>
    </html>
  );
}