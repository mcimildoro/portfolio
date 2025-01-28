import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

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
    <html lang="en">
      <body
        className={`${urbanist.className} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
