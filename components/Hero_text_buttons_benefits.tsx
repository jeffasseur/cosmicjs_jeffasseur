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
              href="/services/webflow-website"
              className="bg-primary px-8 py-4 text-white font-medium text-lg rounded-full hover:bg-light-50 transition-all"
            >
              New Website
            </Link>
            <Link
              href="/services/photo-video"
              className="border border-primary px-8 py-4 text-primary font-medium text-lg rounded-full hover:bg-primary hover:text-white transition-all"
            >
              Photo & Video
            </Link>
          </div>
          <div className="flex gap-8 *:text-xs *:uppercase">
            <Link href="/services/webflow-website">Webflow</Link>
            <Link href="/services/software-web-apps">Wordpress</Link>
            <Link href="/services/software-web-apps">Javascript</Link>
            <Link href="/services/software-web-apps">Custom build</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero_text_buttons_benefits;
