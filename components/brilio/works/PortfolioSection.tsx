import React from "react";
import PortfolioOne from "./PortfolioOne";
import styles from "./styles.module.css";

const PortfolioSection = ({
  title = "Selected Works",
  viewAllLink = "/works",
}) => {
  return (
    <section id="works" className='block !relative !p-0' style={{ padding: 0 }}>
      <div className={`container`}>
        <div className={`mx-0 flex flex-wrap mt-0`}>
          <div className={`${styles.col12}`}>
            {/* Intro */}
            <div className={`${styles.intro} flex justify-between items-center relative mb-10`}>
              <h3 className={`${styles.title}`}>{title}</h3>
              <a className={`${styles.btn} btn btn-outline content-btn`} href={viewAllLink}>
                View all projects
              </a>
            </div>
          </div>
        </div>
        {/* PortfolioOne Component */}
        <PortfolioOne />
      </div>
    </section>
  );
};

export default PortfolioSection;
