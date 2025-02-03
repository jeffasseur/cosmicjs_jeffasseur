// app/shop/[slug]/page.tsx
import { cosmic } from "@/cosmic/client";
import Link from "next/link";
import { ProjectIdToCard } from "@/components/ProjectIdToCard";
import CtaSection from "@/components/CtaSection";
import { ServiceHighlightedProjectsInterface } from "@/interfaces";
import { stat } from "fs";
import { metadata } from "../../layout";
import { Section } from "@/cosmic/blocks/pages/PageSection";

export const revalidate = 60;

const steps = [
  {
    title: "(Online) coffee",
    description:
      "First understanding your business and your goals. We can then discuss how we can help you. Ofcourse, the coffee is on us.",
  },
  {
    title: "Tailored proposition",
    description:
      "Based on our conversation, we will make a tailored proposition. This will include the scope of the project, the timeline and the budget.",
  },
  {
    title: "Dive in the real work",
    description:
      "Once we have a deal, we will start working on your project. We will keep you updated on the progress and will ask for your feedback.",
  },
  {
    title: "Delivery & support",
    description:
      "Once the project is finished, we will deliver it to you. We will also provide you with the necessary documentation and training.",
  },
];

export async function generateMetadata(props0: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props0.params;
  const { object: product } = await cosmic.objects
    .findOne({
      type: "services",
      slug: params.slug,
      status: "published",
    })
    .props("title,metadata");
  return {
    title: `${product.metadata.seo?.title} | ${product.title}`,
    description: product.metadata.seo?.description,
    openGraph: {
      title: `${product.metadata.seo?.title} | ${product.title}`,
      description: product.metadata.seo?.description,
      images: [product.metadata.seo?.og_image?.imgix_url],
    },
  };
}

export async function generateStaticParams() {
  const { objects: products } = await cosmic.objects.find({
    type: "services",
  });
  return products.map((product: { slug: string }) => ({
    slug: product.slug,
  }));
}
export default async function SingleProductPage(props: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{
    success?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const params = await props.params;

  const { object: product } = await cosmic.objects
    .findOne({
      type: "services",
      slug: params.slug,
    })
    .props("title,metadata")
    .depth(1);

  console.log("product", product);

  return (
    <>
      <section className="mt-12">
        <div className="container mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol role="list" className="flex space-x-1">
              <li key={0}>
                <div className="flex items-center">
                  <Link
                    href="/services"
                    className="text-xs md:text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Services
                  </Link>
                </div>
              </li>
              <li>
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </li>
              <li
                key={1}
                className="text-xs md:text-sm font-medium text-gray-500 hover:text-gray-600"
              >
                {product.title}
              </li>
            </ol>
          </nav>
          <div className="flex flex-col gap-8 lg:gap-12 items-start min-h-[60vh]">
            <h1 className="lg:text-8xl lg:max-w-5xl font-light">
              {product.metadata.hero_section.heading_1}
            </h1>
            <p className="max-w-lg text-lg">
              {product.metadata.hero_section.description}
            </p>
            <Link href="/contact" className="footer-btn flex items-center">
              <span>Talk to an expert</span>
              {/** Arrow left down */}
              <svg
                className="w-6 h-6 -rotate-[135deg] ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 0a1 1 0 0 1 .707 1.707L6.414 6H18a1 1 0 1 1 0 2H6.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6A1 1 0 0 1 10 0z"
                />
              </svg>
            </Link>
            {product.metadata.hero_section.highlights.length > 0 && (
              <div
                className={`flex flex-col lg:grid lg:grid-cols-${product.metadata.hero_section.highlights.length} gap-8 w-full mt-12`}
              >
                {product.metadata.hero_section.highlights.map(
                  (highlight: any, index: number) => (
                    <div
                      key={index}
                      className="bg-light-90 py-4 pl-4 pr-2 rounded-md border-2 border-light-80 flex gap-4 items-center shadow-md lg:p-8"
                    >
                      <span className="text-3xl font-semibold text-primary lg:text-5xl">
                        {highlight.number_big}
                      </span>
                      <p className="text-dark-70 text-sm lg:text-md">
                        {highlight.number_description}
                      </p>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </section>
      {product.metadata?.sections.length > 0 && (
        <section>
          {product.metadata.sections.map((section: any, index: number) => (
            <div key={index} className="container mb-12">
              <div className="">
                <div className="w-full lg:relative lg:aspect-video overflow-hidden">
                  <div className="lg:absolute lg:left-0 lg:bottom-0 pb-8 pt-4 pl-2 lg:pl-8 pr-4 lg:pr-6 bg-white dark:bg-dark-80 rounded-xl">
                    <h2 className="mb-4 text-center font-bold">
                      {section.section_title}
                    </h2>
                  </div>
                  <img
                    alt={section.section_title}
                    className="rounded-xl h-full w-full object-cover"
                    src={`${section.section_image.imgix_url}?w=1600&auto=format,compression`}
                  />
                </div>
                <div>
                  <div
                    className="mb-6 *:mb-12"
                    dangerouslySetInnerHTML={{
                      __html: section.section_content,
                    }}
                  />
                  <div></div>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
      {product.metadata.highlighted_projects.length > 0 && (
        <section>
          <div className="container mb-12">
            <div className="flex justify-between items-center mb-12">
              <h2 className="max-w-3xl">Some of the highlight projects</h2>
              <Link
                href="/work"
                className="hidden text-primary underline lg:block"
              >
                View all projects
              </Link>
            </div>
            <div className="mt-6 w-full grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-3 xl:gap-x-8">
              {product.metadata.highlighted_projects.map(
                (
                  object: ServiceHighlightedProjectsInterface,
                  index: number
                ) => {
                  return <ProjectIdToCard key={index} id={object.project} />;
                }
              )}
            </div>
          </div>
        </section>
      )}

      <section>
        <div className="container mb-12">
          <h2 className="max-w-3xl mb-12 text-center mx-auto">How we work</h2>
          <div className="pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-20">
              {steps &&
                steps.map((step, index) => (
                  <div key={index}>
                    <time className="flex items-center gap-2 text-sm uppercase font-semibold text-light-50 mb-6">
                      <svg
                        viewBox="0 0 4 4"
                        aria-hidden="true"
                        className="w-1 h-1 text-light-50"
                      >
                        <circle
                          r="2"
                          cx="2"
                          cy="2"
                          fill="currentColor"
                        ></circle>
                      </svg>
                      Step {index + 1}
                      <div
                        aria-hidden="true"
                        className="translate-0 w-auto h-px bg-gradient-to-r flex-auto from-transparent from-10% to-light-50"
                      ></div>
                    </time>
                    <h4 className="font-medium text-primary mb-4 dark:text-light-90">
                      {step.title}
                    </h4>
                    <p className="text-dark-70 font-light dark:text-light-70">
                      {step.description}
                    </p>
                  </div>
                ))}
            </div>
            <div className="flex justify-center">
              <Link href="/contact" className="btn">
                Start your project here
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <CtaSection />
        </div>
      </section>
    </>
  );
}
