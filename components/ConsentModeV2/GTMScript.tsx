import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

interface GTMScriptProps {
  gtmId: string;
}

/**
 * Drop this in your root layout BEFORE any other scripts.
 * It sets up Google Consent Mode V2 default (all denied) and
 * loads GTM. The CookieConsentProvider will call gtag("consent","update")
 * once the user makes a choice.
 */
export default function GTMScript({ gtmId }: GTMScriptProps) {
  return (
    <>
      {/* Consent Mode V2 — default denied, must run before GTM */}
      <Script id="consent-mode-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;

          gtag('consent', 'default', {
            ad_storage:              'denied',
            ad_user_data:            'denied',
            ad_personalization:      'denied',
            analytics_storage:       'denied',
            functionality_storage:   'denied',
            personalization_storage: 'denied',
            security_storage:        'granted',
            wait_for_update:         500
          });

          gtag('set', 'ads_data_redaction', true);
          gtag('set', 'url_passthrough', true);
        `}
      </Script>

      {/* Google Tag Manager */}
      <GoogleTagManager gtmId={gtmId} />
      {/* <Script id="gtm-loader" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');
        `}
      </Script> */}
    </>
  );
}
