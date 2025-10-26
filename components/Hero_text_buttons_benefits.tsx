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
              href="/services/website-webshop"
              className="btn !bg-primary px-8 py-4 text-white font-medium text-lg !rounded-full !hover:bg-light-50 transition-all"
            >
              Professional Website
            </Link>
            <Link
              href="/services/photo-video"
              className="btn border !border-primary px-8 py-4 !text-primary font-medium text-lg !rounded-full !hover:bg-primary !hover:text-white transition-all !dark:hover:border-primary !dark:border-white !dark:text-white"
            >
              Content Creation
            </Link>
          </div>
          <div className="flex flex-col gap-4 *:text-xs *:uppercase *:p-1 *:tracking-widest lg:flex-row lg:gap-8">
            <Link href="/services/seo-sea">More visitors</Link>
            <Link href="/services/seo-sea">More conversions</Link>
            <Link href="/services/seo-sea">Better ranking on Google</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero_text_buttons_benefits;
