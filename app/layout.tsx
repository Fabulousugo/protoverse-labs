import type { Metadata } from "next";
import { Inter, Roboto, Space_Grotesk, Space_Mono,Orbitron,Montserrat } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { space } from "postcss/lib/list";



const orbitron = Orbitron({
  subsets: ["latin"],
  variable: '--font-logo',
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-montserrat',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-logo',
});

export const metadata: Metadata = {
  title: "Protoverse Labs - Innovation Without Limits",
  description: "Africa's frontier for Space-AI Education, Storytelling, Research & Innovation",
  keywords: ["space education", "AI learning", "STEM Africa", "innovation", "education technology"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${montserrat.variable} ${orbitron.variable} ${spaceGrotesk.variable}  antialiased`}>
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
