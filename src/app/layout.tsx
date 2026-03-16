import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          <div className="fixed inset-0 -z-10 bg-background transition-colors duration-300" />
          <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(154,205,50,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(217,255,0,0.05),transparent_50%)] pointer-events-none" />
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
