import type { Metadata } from "next";
import { Poppins, Bricolage_Grotesque, Press_Start_2P } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/ui/Navbar";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700", "800"] 
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});


const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-press-start",
});

export const metadata: Metadata = {
  title: "Manny D' Great | Blockchain & Backend Engineer",
  description: "Senior Blockchain & Backend Engineer Portfolio Dashboard",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} ${bricolage.variable} ${pressStart2P.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          <div className="fixed inset-0 -z-10 bg-background transition-colors duration-300" />
          <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)] pointer-events-none" />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
