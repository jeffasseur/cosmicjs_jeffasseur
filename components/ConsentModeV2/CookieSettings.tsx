"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useCookieConsent } from "./../../context/CookieConsentContext";
import { consentCategories, CookieConsent } from "./../../lib/cookie-consent";

export default function CookieSettings() {
  const { consent, saveSettings, acceptAll, rejectAll, closeSettings } =
    useCookieConsent();

  const [local, setLocal] = useState<CookieConsent>({ ...consent });
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (key: keyof CookieConsent) => {
    if (key === "necessary") return;
    setLocal((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="settings-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeSettings}
        aria-hidden="true"
      />

      {/* Panel */}
      <motion.div
        className="settings-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Cookie settings"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 32 }}
      >
        {/* Header */}
        <div className="settings-header">
          <div>
            <p className="settings-eyebrow">Privacy Centre</p>
            <h2 className="settings-title">Cookie Settings</h2>
          </div>
          <button
            className="settings-close"
            onClick={closeSettings}
            aria-label="Close settings"
            type="button"
          >
            ✕
          </button>
        </div>

        <p className="settings-intro">
          Manage your cookie preferences below. Strictly necessary cookies
          cannot be disabled as they are required for the website to function
          correctly. Your preferences are stored for{" "}
          <strong>90 days</strong>.
        </p>

        {/* Categories */}
        <div className="settings-categories">
          {consentCategories.map((cat) => {
            const isOn = cat.required ? true : local[cat.key];
            const isExpanded = expanded === cat.key;

            return (
              <div key={cat.key} className="category-card">
                <div className="category-header">
                  <button
                    className="category-expand-btn"
                    onClick={() =>
                      setExpanded(isExpanded ? null : cat.key)
                    }
                    aria-expanded={isExpanded}
                    type="button"
                  >
                    <span className="category-chevron">{isExpanded ? "▲" : "▼"}</span>
                    <span className="category-label">{cat.label}</span>
                    {cat.required && (
                      <span className="category-required">Required</span>
                    )}
                  </button>

                  {/* Toggle */}
                  <button
                    role="switch"
                    aria-checked={isOn}
                    aria-label={`Toggle ${cat.label}`}
                    disabled={cat.required}
                    onClick={() => toggle(cat.key)}
                    className={`toggle ${isOn ? "toggle--on" : ""} ${cat.required ? "toggle--disabled" : ""}`}
                    type="button"
                  >
                    <span className="toggle-thumb" />
                  </button>
                </div>

                <motion.div
                  className="category-body"
                  initial={false}
                  animate={{
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0,
                  }}
                  transition={{ duration: 0.22, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <p className="category-description">{cat.description}</p>
                  <div className="category-examples">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="example-chip">{ex}</span>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Footer actions */}
        <div className="settings-footer">
          <button className="btn btn-ghost" onClick={rejectAll} type="button">
            Reject all
          </button>
          <div className="settings-footer-right">
            <button
              className="btn btn-outline"
              onClick={() => saveSettings(local)}
              type="button"
            >
              Save preferences
            </button>
            <button className="btn btn-primary" onClick={acceptAll} type="button">
              Accept all
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
