// app/layout.tsx
import type { Metadata } from "next";
import { Libre_Franklin, Fjalla_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { CartProvider } from "@/cosmic/blocks/ecommerce/CartProvider";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Suspense } from "react";
import { AuthProvider } from "@/cosmic/blocks/user-management/AuthContext";
import Footer from "@/components/Footer";
import { Plus_Jakarta_Sans } from "next/font/google";

const sans = Libre_Franklin({ subsets: ["latin"], variable: "--font-sans" });
const display = Fjalla_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});
const plusJakartaSans = Plus_Jakarta_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jeffasseur.be"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  title: "JEF .F | Web(Flow) Developer & Photographer",
  description:
    "A Cosmic template built with BlBelgium based Web(Flow) Developer & Photographer. I make cool websites and professional photos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${plusJakartaSans.variable} font-sans md:p-0 bg-white dark:bg-black h-dvh w-full`}
      >
        <Suspense>
          <AuthProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <CartProvider>
                <div>
                  <Header />
                  {children}
                </div>
                <Footer />
              </CartProvider>
              <TailwindIndicator />
            </ThemeProvider>
          </AuthProvider>
        </Suspense>
      </body>
    </html>
  );
}
