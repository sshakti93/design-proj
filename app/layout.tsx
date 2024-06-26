import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { HeaderPage } from "./Components/HeaderPage/HeaderPage";
import { FooterPage } from "./Components/FooterPage/FooterPage";
import Home from "./page";



const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  
  children,
}: Readonly<{



  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <HeaderPage/>
        {children}
        <FooterPage/>
      </body>
      
    </html>
  );
}
