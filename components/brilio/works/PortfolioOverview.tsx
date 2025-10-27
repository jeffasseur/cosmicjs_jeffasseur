import { cosmic } from "@/cosmic/client";
import { ProjectType } from "@/interfaces";
import styles from "./styles.module.css"; // Assuming you have a CSS module for styles
import { metadata } from "@/app/layout";

type QueryProps = {
  query: any;
  limit: number;
};

const PortfolioOverview = async ({ query, limit }: QueryProps) => {
  const { objects: projects } = await cosmic.objects
    .find(query)
    .props("id,slug,title,metadata")
    .depth(1)
    .limit(limit);

  return (
    <div className={`mx-0 flex flex-wrap mt-0`}>
      <div
        className={`w-full max-w-full mt-0 grid gap-8 grid-cols-1 lg:grid-cols-2`}
      >
        {projects.map((item: ProjectType) => (
          <div className={`${styles.stackItem} cursor-pointer`} key={item.id}>
            <div
              className={`${styles.portfolioItem} ${styles.card} ${styles.layout2} ${styles.hasShadow}`}
            >
              <div className={`${styles.imageHolder}`}>
                <a
                  className={`${styles.cardThumb} bg-light-90 dark:bg-dark-80`}
                  href={`/work/${item.slug}`}
                >
                  {item.metadata.image && !item.metadata.hero_video && (
                    <img
                      src={item.metadata.image.imgix_url}
                      alt={item.title}
                      className="aspect-square"
                    />
                  )}
                  {item.metadata.hero_video && (
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
                    <h4 className={`${styles.title} mt-2 md:mt-3 mb-3`}>
                      {item.title}
                    </h4>
                    <div className={`${styles.showProject}`}>
                      <div className={`${styles.cardTerms}`}>
                        <a
                          className={`${styles.terms} ${styles.badge} ${styles.outlined}`}
                          href={`/services/${item.metadata.service.slug}`}
                        >
                          {item.metadata.service.title}
                        </a>
                        <span
                          className={`${styles.terms} ${styles.badge} ${styles.outlined}`}
                        >
                          {item.metadata.client.title}
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
        ))}
      </div>
    </div>
  );
};

export default PortfolioOverview;
