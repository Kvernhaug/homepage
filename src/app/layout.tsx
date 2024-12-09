import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React, { useEffect } from 'react';
import { Navigation } from "@/components/radix-navigation";
import { Sidebar } from "@/components/sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Function to get theme based on the current month
const getSeasonalTheme = () => {
  const month = new Date().getMonth();

  if (month >= 2 && month <= 4) {
    return 'spring'; // March to May
  } else if (month >= 5 && month <= 7) {
    return 'summer'; // June to August
  } else if (month >= 8 && month <= 10) {
    return 'autumn'; // September to November
  } else {
    return 'winter'; // December to February
  }
};


export const metadata: Metadata = {
  title: "kvernhaug's trusty homepage",
  description: "Generated by magic faeries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" season-theme={getSeasonalTheme()} suppressHydrationWarning>  
      <body>
        <div className="flex items-center flex-col bg-cover w-screen h-screen">
          <nav className="fixed flex bg-season bg-opacity-100 h-11">
            <Navigation />  
          </nav>
          <div // Center transparent banner
            className="flex flex-col bg-neutral-200 bg-opacity-70 mt-20 p-10 w-2/3 rounded-2xl"
          >
            
            <main className="flex flex-row overflow-auto scrollbar">
              <div className="flex-1">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html >
  );
}
