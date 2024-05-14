import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./_components/GoogleAnalytics";
import { ThemeProvider } from "./_components/theme-provider";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MmB Blog",
  description:
    "avec MmB, lancez-vous dans le code dès aujourd'hui et codez votre avenir",
  icons: {
    icon: "../public/mmb_logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <GoogleAnalytics />
        <body className="container mx-auto-screen">
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
    </>
  );
}
