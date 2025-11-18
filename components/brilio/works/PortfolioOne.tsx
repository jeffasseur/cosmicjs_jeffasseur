import { ProjectType } from "@/interfaces";
import styles from "./styles.module.css"; // Assuming you have a CSS module for styles

const PortfolioOne = async ({ item }: { item: ProjectType }) => {
  return (
    <div className={`${styles.stackItem} cursor-pointer`} key={item.id}>
      <div
        className={`${styles.portfolioItem} ${styles.card} ${styles.layout2} ${styles.hasShadow}`}
      >
        <div className={`${styles.imageHolder}`}>
          <a
            className={`${styles.cardThumb} bg-light-90 dark:bg-dark-80`}
            href={`/work/${item.slug}`}
          >
            {item.metadata?.image && !item.metadata.hero_video && (
              <img
                src={item.metadata.image.imgix_url}
                alt={item.title}
                className="aspect-square"
              />
            )}
            {item.metadata?.hero_video && (
              <video
                className="object-contain aspect-square"
                src={item.metadata.hero_video.imgix_url}
                autoPlay
                loop
                muted
              />
            )}
          </a>
          <div className={`${styles.cardOverlay}`}>
            <div className={`${styles.heading}`}>
              <h4
                className={`${styles.title} text-2xl mt-2 md:mt-3 mb-4 md:text-5xl lg:mb-6 lg:text-4xl`}
              >
                {item.title}
              </h4>
              <div className={`${styles.showProject}`}>
                <div className={`${styles.cardTerms}`}>
                  <a
                    className={`${styles.terms} ${styles.badge} ${styles.outlined}`}
                    href={`/services/${item.metadata?.service.slug}`}
                  >
                    {item.metadata?.service.title}
                  </a>
                  <span
                    className={`${styles.terms} ${styles.badge} ${styles.outlined}`}
                  >
                    {item.metadata?.client.title}
                  </span>
                </div>
                <div className={`${styles.projectLink}`}>
                  <a href={`/work/${item.slug}`}>Show Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioOne;
