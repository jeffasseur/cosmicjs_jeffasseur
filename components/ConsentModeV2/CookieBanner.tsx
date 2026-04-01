"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCookieConsent } from "./../../context/CookieConsentContext";
import CookieSettings from "./CookieSettings";

export default function CookieBanner() {
  const { showBanner, showSettings, acceptAll, rejectAll, openSettings } =
    useCookieConsent();

  return (
    <>
      <AnimatePresence>
        {showBanner && !showSettings && (
          <motion.div
            key="banner"
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 120, opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            className="cookie-banner"
            role="dialog"
            aria-modal="true"
            aria-label="Cookie consent"
          >
            {/* Decorative grain */}
            <div className="banner-grain" aria-hidden="true" />

            <div className="banner-inner">
              <div className="banner-text-col">
                <div className="banner-eyebrow">
                  <span className="cookie-dot" />
                  Cookie Preferences
                </div>
                <p className="banner-body">
                  We use cookies to enhance your browsing experience, serve
                  personalised content, and analyse our traffic. You can choose
                  which categories to allow or customise your settings at any
                  time.
                </p>
                <button
                  className="banner-details-link"
                  onClick={openSettings}
                  type="button"
                >
                  Manage preferences →
                </button>
              </div>

              <div className="banner-actions">
                <button
                  className="btn btn-ghost"
                  onClick={rejectAll}
                  type="button"
                >
                  Reject all
                </button>
                <button
                  className="btn btn-outline"
                  onClick={openSettings}
                  type="button"
                >
                  Customise
                </button>
                <button
                  className="btn btn-primary"
                  onClick={acceptAll}
                  type="button"
                >
                  Accept all
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSettings && <CookieSettings />}
      </AnimatePresence>
    </>
  );
}
