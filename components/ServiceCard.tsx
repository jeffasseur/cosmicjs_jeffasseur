import Link from "next/link";
import { ContentInterface } from "@/interfaces";

const ServiceCard = ({ service }: { service: ContentInterface }) => {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block relative aspect-square max-w-[30rem] drop-shadow-md rounded-2xl p-0 bg-cover bg-center w-full overflow-hidden transition-all transition-500 ease-in-out cursor-pointer bg-white border border-light-90 dark:bg-dark-90 md:duration-300 hover:scale-105 hover:shadow-md hover:bg-light-80"
    >
      <div className="h-full p-6">
        <div className="h-full flex justify-between items-end w-full">
          <div className="flex flex-col gap-4 leading-none rounded-2xl mt-auto mb-2 text-lg tracking-tight text-dark-70 dark:text-light-90">
            <h3 className="text-xl lg:text-3xl text-dark-70 dark:text-light-90">
              {service.title}
            </h3>
            <p>{service.metadata?.seo?.description}</p>
            <div className="flex items-center gap-2">
              <p>Learn more</p>
              <svg
                className="w-6 h-6 md:w-8 md:h-8 -rotate-90"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 9.5L12 16.5L5 9.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
