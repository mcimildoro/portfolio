import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/context/LanguageContext";

const urbanist = Urbanist({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Miguel Cimildoro",
  description: "Landing Page by Miguel Cimildoro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${urbanist.className} antialiased `} >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="theme"
          >
            <LanguageProvider>{children}</LanguageProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}
