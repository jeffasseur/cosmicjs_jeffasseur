// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
// import { CartProvider } from "@/cosmic/blocks/ecommerce/CartProvider";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Suspense } from "react";
import { AuthProvider } from "@/cosmic/blocks/user-management/AuthContext";
import Footer from "@/components/Footer";
import { Plus_Jakarta_Sans } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ReactLenis, useLenis } from "lenis/react";

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
  title:
    "JEF .F | Antwerp based Web(Flow) Developer & Photographer at your service",
  description:
    "Antwerp based Web(Flow) Developer & Photographer. I make cool websites and professional photos. We value personal contact and a good relationship with our customers. We are happy to help you with your project.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${plusJakartaSans.className} font-sans md:p-0 h-dvh w-full bg-white dark:bg-dark-90 text-dark-90 dark:text-light-90`}
      >
        <Suspense>
          <AuthProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              themes={["light", "dark"]}
            >
              {/* <CartProvider> */}
              <ReactLenis root />
              <div>
                <Header />
                <main>{children}</main>
              </div>
              <Footer />
              {process.env.NODE_ENV === "production" && (
                <>
                  <CookieConsent />
                  <Analytics />
                  <SpeedInsights />
                </>
              )}
              {/* </CartProvider> */}
              {
                // only in dev environment
                process.env.NODE_ENV === "development" && (
                  <>
                    <TailwindIndicator />
                  </>
                )
              }
            </ThemeProvider>
          </AuthProvider>
        </Suspense>
      </body>
    </html>
  );
}
