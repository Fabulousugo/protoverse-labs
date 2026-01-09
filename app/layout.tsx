import type { Metadata } from "next";
import { Inter, Roboto, Space_Grotesk, Space_Mono,Orbitron,Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-body',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-heading',
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: '--font-logo',
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: '--font-roboto',
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-montserrat',
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
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${orbitron.variable} ${roboto.variable} ${montserrat.variable} antialiased`}>
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
