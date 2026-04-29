import type { Metadata } from "next";
import { Inter, Outfit, Press_Start_2P } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/ui/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} ${pressStart2P.variable} font-sans antialiased`}
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="fixed inset-0 -z-20 bg-background transition-colors duration-500" />
          <div className="fixed inset-0 -z-10 bg-grid-pattern pointer-events-none" />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
