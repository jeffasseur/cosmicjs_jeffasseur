import './index.css';

const ProjectCarousel = () => {
  return (
    <section className="section-resource is--dark">
    <div className="overlay">
      <div className="overlay-inner">
        <div className="overlay-count-row">
          <div className="count-column">
            <h2 data-slide-count="step" className="count-heading">01</h2>
          </div>
          <div className="count-row-divider"></div>
          <div className="count-column">
            <h2 data-slide-count="total" className="count-heading">04</h2>
          </div>
        </div>
        <div className="overlay-nav-row"><button aria-label="previous slide" data-slider="button-prev" className="button"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 17 12" fill="none" className="button-arrow">
              <path d="M6.28871 12L7.53907 10.9111L3.48697 6.77778H16.5V5.22222H3.48697L7.53907 1.08889L6.28871 0L0.5 6L6.28871 12Z" fill="currentColor"></path>
            </svg>
            <div className="button-overlay">
              <div className="overlay-corner"></div>
              <div className="overlay-corner top-right"></div>
              <div className="overlay-corner bottom-left"></div>
              <div className="overlay-corner bottom-right"></div>
            </div>
          </button><button aria-label="previous slide" data-slider="button-next" className="button"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 17 12" fill="none" className="button-arrow next">
              <path d="M6.28871 12L7.53907 10.9111L3.48697 6.77778H16.5V5.22222H3.48697L7.53907 1.08889L6.28871 0L0.5 6L6.28871 12Z" fill="currentColor"></path>
            </svg>
            <div className="button-overlay">
              <div className="overlay-corner"></div>
              <div className="overlay-corner top-right"></div>
              <div className="overlay-corner bottom-left"></div>
              <div className="overlay-corner bottom-right"></div>
            </div>
          </button></div>
      </div>
    </div>
    <div className="main">
      <div className="slider-wrap">
        <div data-slider="list" className="slider-list">
          <div data-slider="slide" className="slider-slide">
            <div className="slide-inner"><img src="https://cdn.prod.website-files.com/67696d1cd4b1d776a63f0f94/67697015cad44a99732d47ae_slide-1.avif" alt="Abstract layout By FAKURIANDESIGN through Unsplash"  loading="lazy" className="slide-img" />
              <div className="slide-caption">
                <div className="caption-dot"></div>
                <p className="caption">Layout nº004</p>
              </div>
            </div>
          </div>
          <div data-slider="slide" className="slider-slide active">
            <div className="slide-inner"><img loading="lazy" src="https://cdn.prod.website-files.com/67696d1cd4b1d776a63f0f94/67697015cad44a99732d47c6_slide-2.avif" alt="Abstract layout By FAKURIANDESIGN through Unsplash" className="slide-img" />
              <div className="slide-caption">
                <div className="caption-dot"></div>
                <p className="caption">Layout nº001</p>
              </div>
            </div>
          </div>
          <div data-slider="slide" className="slider-slide">
            <div className="slide-inner"><img src="https://cdn.prod.website-files.com/67696d1cd4b1d776a63f0f94/67697015cad44a99732d47d2_slide-3.avif" alt="Abstract layout By FAKURIANDESIGN through Unsplash"  loading="lazy" className="slide-img" />
              <div className="slide-caption">
                <div className="caption-dot"></div>
                <p className="caption">Layout nº002</p>
              </div>
            </div>
          </div>
          <div data-slider="slide" className="slider-slide">
            <div className="slide-inner"><img src="https://cdn.prod.website-files.com/67696d1cd4b1d776a63f0f94/67697015cad44a99732d47ba_slide-4.avif" alt="Abstract layout By FAKURIANDESIGN through Unsplash"  loading="lazy" className="slide-img" />
              <div className="slide-caption">
                <div className="caption-dot"></div>
                <p className="caption">Layout nº003</p>
              </div>
            </div>
          </div>
          <div data-slider="slide" className="slider-slide">
            <div className="slide-inner"><img  src="https://cdn.prod.website-files.com/67696d1cd4b1d776a63f0f94/67697015cad44a99732d47c6_slide-2.avif" alt="Abstract layout By FAKURIANDESIGN through Unsplash" loading="lazy" className="slide-img" />
              <div className="slide-caption">
                <div className="caption-dot"></div>
                <p className="caption">Layout nº005</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default ProjectCarousel