export const COOKIE_NAME = "cookie_consent";
export const COOKIE_EXPIRY_DAYS = 90;

export interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

export const defaultConsent: CookieConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

export interface ConsentCategory {
  key: keyof CookieConsent;
  label: string;
  description: string;
  required?: boolean;
  examples: string[];
}

export const consentCategories: ConsentCategory[] = [
  {
    key: "necessary",
    label: "Strictly Necessary",
    description:
      "Essential for the website to function. They enable core features like security, network management, and account access.",
    required: true,
    examples: ["Session management", "Security tokens", "Load balancing"],
  },
  {
    key: "preferences",
    label: "Preferences",
    description:
      "Allow the website to remember choices you make (language, region, etc.) and provide enhanced, personalised features.",
    required: false,
    examples: ["Language settings", "Theme preference", "Region selection"],
  },
  {
    key: "analytics",
    label: "Analytics",
    description:
      "Help us understand how visitors interact with the website by collecting and reporting information anonymously.",
    required: false,
    examples: ["Google Analytics", "Page views", "User journeys"],
  },
  {
    key: "marketing",
    label: "Marketing",
    description:
      "Used to track visitors across websites to display relevant ads and measure campaign effectiveness.",
    required: false,
    examples: ["Google Ads", "Meta Pixel", "Retargeting"],
  },
];
