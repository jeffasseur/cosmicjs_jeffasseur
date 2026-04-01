"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  CookieConsent,
  ConsentCategory,
  defaultConsent,
  COOKIE_NAME,
  COOKIE_EXPIRY_DAYS,
} from "./../lib/cookie-consent";

interface CookieConsentContextType {
  consent: CookieConsent;
  showBanner: boolean;
  showSettings: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  saveSettings: (consent: CookieConsent) => void;
  openSettings: () => void;
  closeSettings: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | null>(null);

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<CookieConsent>(defaultConsent);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const stored = getCookie(COOKIE_NAME);
    if (stored) {
      try {
        const parsed: CookieConsent = JSON.parse(stored);
        setConsent(parsed);
        pushConsentToGTM(parsed);
        setShowBanner(false);
      } catch {
        setShowBanner(true);
      }
    } else {
      // Push default (denied) consent immediately for Consent Mode V2
      pushConsentToGTM(defaultConsent);
      setShowBanner(true);
    }
  }, []);

  const saveConsent = (newConsent: CookieConsent) => {
    setConsent(newConsent);
    setCookie(COOKIE_NAME, JSON.stringify(newConsent), COOKIE_EXPIRY_DAYS);
    pushConsentToGTM(newConsent);
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    const allAccepted: CookieConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    saveConsent(allAccepted);
  };

  const rejectAll = () => {
    const allRejected: CookieConsent = {
      necessary: true, // always required
      analytics: false,
      marketing: false,
      preferences: false,
    };
    saveConsent(allRejected);
  };

  const saveSettings = (newConsent: CookieConsent) => {
    saveConsent({ ...newConsent, necessary: true });
  };

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        showBanner,
        showSettings,
        acceptAll,
        rejectAll,
        saveSettings,
        openSettings: () => setShowSettings(true),
        closeSettings: () => setShowSettings(false),
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) throw new Error("useCookieConsent must be used within CookieConsentProvider");
  return ctx;
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function setCookie(name: string, value: string, days: number) {
  const expires = new Date();
  expires.setDate(expires.getDate() + days);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function pushConsentToGTM(c: CookieConsent) {
  if (typeof window === "undefined") return;
  // Google Consent Mode V2
  window.gtag?.("consent", "update", {
    ad_storage:              c.marketing   ? "granted" : "denied",
    ad_user_data:            c.marketing   ? "granted" : "denied",
    ad_personalization:      c.marketing   ? "granted" : "denied",
    analytics_storage:       c.analytics   ? "granted" : "denied",
    functionality_storage:   c.preferences ? "granted" : "denied",
    personalization_storage: c.preferences ? "granted" : "denied",
    security_storage:        "granted", // always granted
  });
}
