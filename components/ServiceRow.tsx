import Link from "next/link";
import { ContentInterface } from "@/interfaces";

const ServiceRow = ({ service }: { service: ContentInterface }) => {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block relative p-0 w-full overflow-hidden transition-all transition-500 ease-in-out cursor-pointer bg-white border-b-2 border-light-90 dark:border-dark-20 dark:bg-dark-90 md:duration-300 hover:scale-105 hover:drop-shadow-sm"
    >
      <div className="h-full py-6">
        <div className="flex justify-between gap-4 rounded-2xl mt-auto mb-2 tracking-tight text-dark-70 dark:text-light-90">
          <h3 className="text-2xl lg:text-3xl xl:text-4xl text-dark-70 dark:text-light-90 font-light">
            {service.title}
          </h3>
          <p className="max-w-[25rem]">{service.metadata.seo?.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceRow;
