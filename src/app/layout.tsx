import type { Metadata } from "next";
import { Bricolage_Grotesque, Poppins, Press_Start_2P } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { StarsBackground } from "@/components/ui/StarsBackground";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-press-start",
});

export const metadata: Metadata = {
  title: "Manny D' Great | Blockchain & FullStack Engineer",
  description:
    "Premium Web3 developer portfolio — Blockchain, Solidity, JavaScript, and full-stack engineering by Manny D' Great.",
  keywords: [
    "blockchain developer",
    "web3 engineer",
    "solidity",
    "smart contracts",
    "fullstack developer",
    "manny the great",
  ],
  openGraph: {
    title: "Manny D' Great | Blockchain & FullStack Engineer",
    description: "Building scalable Web3 infrastructure and developer tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${bricolage.variable} ${poppins.variable} ${pressStart2P.variable} font-sans antialiased`}
        style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
      >
        <SmoothScrollProvider>
          <CustomCursor />
          <StarsBackground />
          <Navbar />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
