import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from "@/components/providers/theme-provider";

const fontSans = Fira_Code({
  subsets: ["latin"],
  variable: "--font-sans",
})

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
      <body className={fontSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Toaster richColors />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
