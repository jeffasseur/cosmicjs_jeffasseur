"use client";

import Image from "next/image"
import './style.css';
import initTwostepScalingNavigation from "@/utility/navigation/twostepScalingNavigation";
import React from "react";
import Link from "next/link";

interface settingsInterface {
  settings: {
    metadata: {
      logo: {
        url: string;
        imgix_url: string;
      };
      company: string;
      links: [
        {
          company: string;
          url: string;
          icon: {
            imgix_url: string;
          };
        }
      ]
    };
  }
}

const TwoStepScalingNavigation = ({ settings }: settingsInterface) => {
  React.useEffect(() => {
    initTwostepScalingNavigation();
  }, []);

  console.log("Settings in TwoStepScalingNavigation:", settings)

  return (
    <nav data-twostep-nav data-nav-status="not-active" className="twostep-nav">
      <div data-nav-toggle="close" className="twostep-nav__bg"></div>
      <div className="twostep-nav__wrap">
        <div className="twostep-nav__width">
          <div className="twostep-nav__bar">
            <div className="twostep-nav__back">
              <div className="twostep-nav__back-bg"></div>
            </div>
            <div className="twostep-nav__top">
              <Link
                href="/"
                data-nav-toggle="close"
                className="twostep-nav__logo w-inline-block"
              >
                <Image
                  className="rounded-none"
                  src={`${settings.metadata.logo.imgix_url}?w=500&auto=format,compression`}
                  alt={settings.metadata.company}
                  width={500}
                  height={300}
                />
              </Link>
              <div className="flex items-center gap-4">
                <button
                  data-nav-toggle="toggle"
                  className="twostep-nav__toggle"
                >
                  <div className="twostep-nav__toggle-bar"></div>
                  <div className="twostep-nav__toggle-bar"></div>
                </button>
                <Link
                  href="/about"
                  className="relative rounded-full aspect-square w-12 h-12"
                >
                  <Image
                    src="https://res.cloudinary.com/dfi4sldbm/image/upload/v1744035563/JEF-F-avatar-small_fcltdi.webp"
                    alt="Jef Fasseur Avatar"
                    fill
                    className="object-cover rounded-full"
                  />
                  <div className="absolute right-1 bottom-0 h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                </Link>
              </div>
              <div className="twostep-nav__top-line"></div>
            </div>
            <div className="twostep-nav__bottom">
              <div className="twostep-nav__bottom-overflow">
                <div className="twostep-nav__bottom-inner">
                  <div className="twostep-nav__bottom-row">
                    <div className="twostep-nav__bottom-col">
                      <div className="twostep-nav__info">
                        <ul className="twostep-nav__ul">
                          <li className="twostep-nav__li">
                            <Link
                              href="/about"
                              data-nav-toggle="close"
                              className="twostep-nav__link w-inline-block"
                            >
                              <span className="twostep-nav__link-span">
                                About
                              </span>
                            </Link>
                          </li>
                          <li className="twostep-nav__li">
                            <Link
                              href="/services"
                              data-nav-toggle="close"
                              className="twostep-nav__link w-inline-block"
                            >
                              <span className="twostep-nav__link-span">
                                Services
                              </span>
                            </Link>
                          </li>
                          <li className="twostep-nav__li">
                            <Link
                              href="/work"
                              data-nav-toggle="close"
                              className="twostep-nav__link w-inline-block"
                            >
                              <span className="twostep-nav__link-span">
                                Projects
                              </span>
                            </Link>
                          </li>
                          <li className="twostep-nav__li">
                            <Link
                              href="/blog"
                              data-nav-toggle="close"
                              className="twostep-nav__link w-inline-block"
                            >
                              <span className="twostep-nav__link-span">
                                Blog
                              </span>
                            </Link>
                          </li>
                          <li className="twostep-nav__li">
                            <Link
                              href="/contact"
                              data-nav-toggle="close"
                              className="twostep-nav__link w-inline-block"
                            >
                              <span className="twostep-nav__link-span">
                                Contact
                              </span>
                            </Link>
                          </li>
                        </ul>
                        <ul className="twostep-nav__ul is--small">
                          {settings.metadata.links.map((link, index) => (
                            <li className="twostep-nav__li" key={index}>
                              <Link
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                data-nav-toggle="close"
                                className="twostep-nav__link w-inline-block"
                              >
                                <Image
                                  className="twostep-nav__link-icon rounded-none inline-block mr-2"
                                  src={`${link.icon.imgix_url}?w=500&auto=format,compression`}
                                  alt={link.company}
                                  width={18}
                                  height={18}
                                />
                                <span className="twostep-nav__link-eyebrow">
                                  {link.company}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="twostep-nav__bottom-col is--visual">
                      <div className="twostep-nav__visual flex justify-center items-center h-full relaitve">
                        <Link
                          href="https://calendly.com/jef-fasseur/online-coffee"
                          target="_blank"
                          data-nav-toggle="close"
                          className="btn !rounded-full z-10 shadow-lg"
                        >
                          Book a call
                        </Link>
                        <Image
                          className="twostep-nav__visual-img absolute"
                          src="https://res.cloudinary.com/dfi4sldbm/image/upload/v1772290823/icapps-services-overview_o6f3qx.jpg"
                          alt="alt"
                          width={600}
                          height={400}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TwoStepScalingNavigation