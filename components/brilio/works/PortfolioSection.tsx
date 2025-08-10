import React from "react";
import PortfolioOne from "./PortfolioOne";
import styles from "./styles.module.css";
import Link from "next/link";

const PortfolioSection = ({
  title = "Selected Works",
  viewAllLink = "/work",
}) => {
  return (
    <section id="works" className="block !relative !p-0" style={{ padding: 0 }}>
      <div className={`container`}>
        <div className={`mx-0 flex flex-wrap mt-0`}>
          <div className={`${styles.col12}`}>
            {/* Intro */}
            <div
              className={`${styles.intro} flex justify-between items-center relative mb-10`}
            >
              <h2 className={`${styles.title}`}>{title}</h2>
              <Link
                className={`${styles.btn} btn btn-outline content-btn hidden lg:block`}
                href={viewAllLink}
              >
                View all projects
              </Link>
            </div>
          </div>
        </div>
        {/* PortfolioOne Component */}
        <PortfolioOne
          query={{
            type: "projects",
            $and: [{ "metadata.service": "674f6fd98e61b052b6d43777" }],
          }}
          limit={4}
        />
        <div className="flex justify-center mt-8 lg:hidden">
          <Link
            className={`${styles.btn} btn btn-outline content-btn`}
            href={viewAllLink}
          >
            View all projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
