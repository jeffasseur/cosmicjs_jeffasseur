import { cosmic } from "@/cosmic/client";
import { ProjectType } from "@/interfaces";
import styles from "./styles.module.css"; // Assuming you have a CSS module for styles

const PortfolioOne = async () => {
  const { objects: projects } = await cosmic.objects
      .find({
        type: "projects",
      })
      .props("id,slug,title,metadata")
      .depth(1)
      .limit(3);

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
                <a className={`${styles.cardThumb}`} href="/portfolio-single">
                  <img
                    src={item.metadata.image.imgix_url}
                    alt={item.title}
                    className={`min-h-[550px] object-cover transition-all duration-500`}
                  />
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
                          href="/portfolio"
                        >
                          {item.metadata.category.title}
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
