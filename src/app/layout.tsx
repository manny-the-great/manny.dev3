import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manny D' Great | Blockchain & Backend Engineer",
  description: "Senior Blockchain & Backend Engineer Portfolio Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="fixed inset-0 -z-10 bg-black" />
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.05),transparent_50%)]" />
        {children}
      </body>
    </html>
  );
}
