// types/gtag.d.ts
// Augments the global Window with the gtag function used for Consent Mode V2

type GtagConsentArg = "default" | "update";

interface GtagConsentParams {
  ad_storage?:              "granted" | "denied";
  ad_user_data?:            "granted" | "denied";
  ad_personalization?:      "granted" | "denied";
  analytics_storage?:       "granted" | "denied";
  functionality_storage?:   "granted" | "denied";
  personalization_storage?: "granted" | "denied";
  security_storage?:        "granted" | "denied";
  wait_for_update?:         number;
}

interface Window {
  gtag: (
    command: "consent",
    action: GtagConsentArg,
    params: GtagConsentParams
  ) => void;
  dataLayer: unknown[];
}
