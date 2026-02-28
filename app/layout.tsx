// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
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
import Head from "next/head";
import SnowflakeEffect from "@/components/osmo/snowflake";
import TwoStepScalingNavigation from "@/components/osmo/twostepScalingNavigation";
import { cosmic } from "@/cosmic/client";
import { SettingsType } from "@/interfaces";

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Header data
  const {
    object: settings,
  }: {
    object: SettingsType;
  } = await cosmic.objects
    .findOne({
      type: "global-settings",
      slug: "settings",
    })
    .props("metadata")
    .depth(1);

  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>{JSON.stringify(metadata?.title)}</title>
        <meta
          name="description"
          content={JSON.stringify(metadata?.description)}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://jeffasseur.be" />
        <meta property="og:title" content={JSON.stringify(metadata?.title)} />
        <meta
          property="og:description"
          content={JSON.stringify(metadata?.description)}
        />
        <meta property="og:url" content="https://jeffasseur.be" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dfi4sldbm/image/upload/v1744035563/JEF-F-avatar-small_fcltdi.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={JSON.stringify(metadata?.title)} />
        <meta
          name="twitter:description"
          content={JSON.stringify(metadata?.description)}
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dfi4sldbm/image/upload/v1744035563/JEF-F-avatar-small_fcltdi.webp"
        />
      </Head>
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
              <div>
                <TwoStepScalingNavigation settings={settings} />
                <main>{children}</main>
              </div>
              <Footer />
              {process.env.SNOWFLAKE_EFFECT_ENABLED === "true" && (
                <SnowflakeEffect
                  strength={3}
                  infinite={true}
                  className="absolute top-0 left-0 right-0"
                />
              )}
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
