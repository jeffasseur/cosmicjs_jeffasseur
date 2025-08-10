import { cosmic } from "@/cosmic/client";
import { ProjectType } from "@/interfaces";
import styles from "./styles.module.css"; // Assuming you have a CSS module for styles
import { metadata } from "@/app/layout";

type QueryProps = {
  query: any;
  limit: number;
};

const PortfolioOne = async ({ query, limit }: QueryProps) => {
  const { objects: projects } = await cosmic.objects
    .find(query)
    .props("id,slug,title,metadata")
    .depth(1)
    .limit(limit);

  return (
    <div className={`mx-0 flex flex-wrap mt-0`}>
      <div
        className={`${styles.stackWrapper} flex-shrink-0 w-full max-w-full mt-0 lg:px-20`}
      >
        {projects.map((item: ProjectType) => (
          <div className={`${styles.stackItem} cursor-pointer`} key={item.id}>
            <div
              className={`${styles.portfolioItem} ${styles.card} ${styles.layout2} ${styles.hasShadow}`}
            >
              <div className={`${styles.imageHolder}`}>
                <a
                  className={`${styles.cardThumb}`}
                  href={`/work/${item.slug}`}
                >
                  <img src={item.metadata.image.imgix_url} alt={item.title} />
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
                        <a
                          className={`${styles.terms} ${styles.badge} ${styles.outlined}`}
                          href="/portfolio"
                        >
                          {item.metadata.client.title}
                        </a>
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

export default PortfolioOne;
