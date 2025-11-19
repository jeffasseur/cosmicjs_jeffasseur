import { ContentInterface } from "@/interfaces";
import Link from "next/link";
import { ProductType } from "@/cosmic/blocks/ecommerce/ProductCard";

const Hero_text_buttons_benefits = ({
  page,
  services,
}: {
  page: any;
  services: any;
}) => {
  return (
    <section className="p-6 pt-16 lg:pt-22 2xl:pt-20">
      <div className="w-full mx-auto">
        <div className="flex flex-col gap-8 text-center items-center">
          <h1 className="max-w-6xl leading-[1.2] font-semibold">
            {page.metadata.h1}
          </h1>
          <p className="max-w-xl">{page.metadata.subheadline}</p>
          <div className="flex flex-wrap justify-center gap-8">
            {services.map((service: ProductType, index: number) => {
              const firstBtn =
                index == 0 ? "!bg-primary hover:!bg-dark-30" : "";
              return (
                <Link
                  key={index}
                  href={`/services/${service.slug}`}
                  className={`btn ${firstBtn} !px-6 !py-3 text-white font-medium text-lg !rounded-full !hover:bg-light-50 transition-all`}
                >
                  {service.metadata?.cta_button_text}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col gap-4 *:text-xs *:font-mono *:uppercase *:p-1 *:tracking-widest lg:flex-row lg:gap-8">
            <Link href="/services/seo-sea">More visitors</Link>
            <Link href="/services/seo-sea">More conversions</Link>
            <Link href="/services/seo-sea">Better Google ranking</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero_text_buttons_benefits;
