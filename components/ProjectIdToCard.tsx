// components/product-card.tsx
import Link from "next/link";
import { cosmic } from "@/cosmic/client";
import styles from "./../components/brilio/works/styles.module.css"

export async function ProjectIdToCard({ id }: { id: string }) {
  const { object: item } = await cosmic.objects
    .findOne({
      type: "projects",
      id: id,
    })
    .props("title,slug,metadata")
    .depth(1);

  return (
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
  );
}
