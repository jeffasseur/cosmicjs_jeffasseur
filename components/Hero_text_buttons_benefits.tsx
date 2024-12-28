import Link from "next/link";

const Hero_text_buttons_benefits = ({ page }: { page: any }) => {
  return (
    <section className="p-6 mt-10 lg:pt-12 2xl:mt-32">
      <div className="w-full mx-auto">
        <div className="flex flex-col gap-8 text-center items-center">
          <h1 className="max-w-6xl">{page.metadata.h1}</h1>
          <p className="max-w-3xl">{page.metadata.subheadline}</p>
          <div className="flex flex-col gap-8 xl:flex-row">
            <Link
              href="/work"
              className="bg-primary px-8 py-4 text-white font-medium text-lg rounded-full hover:bg-light-50 transition-all"
            >
              Websites & Software
            </Link>
            <Link
              href="/work"
              className="border border-primary px-8 py-4 text-primary font-medium text-lg rounded-full hover:bg-primary hover:text-white transition-all"
            >
              Photo & Video
            </Link>
          </div>
          <div className="flex gap-8 *:text-xs *:uppercase">
            <p>Webflow</p>
            <p>Wordpress</p>
            <p>Shopify</p>
            <p>Cusstom build</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero_text_buttons_benefits;
