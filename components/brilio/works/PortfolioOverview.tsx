import { cosmic } from "@/cosmic/client";
import { ProjectType } from "@/interfaces";
import styles from "./styles.module.css"; // Assuming you have a CSS module for styles
import PortfolioOne from "./PortfolioOne";
import PortfolioOneComingSoon from "./PortfolioOneComingSoon";

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
        {projects.map((item: ProjectType) =>
          item.metadata.coming_soon ? (
            <PortfolioOneComingSoon item={item} key={item.id} />
          ) : (
            <PortfolioOne item={item} key={item.id} />
          )
        )}
      </div>
    </div>
  );
};

export default PortfolioOverview;
