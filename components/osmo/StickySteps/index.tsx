"use client";

import "./styles.css";
import { useEffect } from "react";
import initStickyStepsBasic from './init';

const StickySteps = ({ sections }: { sections: any[] }) => {
  useEffect(() => {
    initStickyStepsBasic();
  }, []);

  return (
    <section className="sticky-steps">
  <div className="sticky-steps__container">
    <div data-sticky-steps-init className="sticky-steps__collection">
      <div className="sticky-steps__list">
        {sections.map((section, index) => (
          <div key={index} data-sticky-steps-item data-sticky-steps-item-status={index === 0 ? "active" : "after"} className="sticky-steps__item">
            <div data-sticky-steps-anchor className="sticky-steps__text">
              <h2 className="sticky-steps__h2">{section.section_title}</h2>
              <div className="sticky-steps__p" dangerouslySetInnerHTML={{
                __html: section.section_content,
              }} />
            </div>
            <div className="sticky-steps__media">
              <div className="sticky-steps__sticky">
                <div className="sticky-steps__visual">
                  <img src={section.section_image.imgix_url} loading="lazy" alt="" className="sticky-steps__cover-image"/>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
  )
}

export default StickySteps;