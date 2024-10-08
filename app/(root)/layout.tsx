import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Topbar from "@/components/shared/Topbar";
import LeftSideBar from "@/components/shared/LeftSideBar";
import RightSideBar from "@/components/shared/RightSideBar";
import Bottombar from "@/components/shared/Bottombar";

const inter = Inter({ subsets: ["latin"] });

export const metadata : Metadata = {
  title: "Threads",
  description: "Threads application for everyone"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
    <html lang="en">
      
      <body className={inter.className}><Topbar/>
      <main className = "flex flex-row">
        <LeftSideBar/>
        
        <section className = "main-container">
          <div className = "w-full max-w-4xl">
            {children}
          </div>
        </section>
        <RightSideBar/>
        </main>
      <Bottombar/>
      </body>
    </html>
    </ClerkProvider>
  );
}
