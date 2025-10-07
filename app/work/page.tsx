// app/page.tsx
import { cosmic } from "@/cosmic/client";
import PortfolioOverview from "@/components/brilio/works/PortfolioOverview";
import CtaSection from "@/components/CtaSection";
import WorkFilters from "../../components/brilio/works/WorkFilters";

export default async function WorkPage(props0: {
  searchParams: Promise<{ service?: string }>;
}) {
  const searchParams = await props0.searchParams;
  const selectedService = searchParams?.service;

  const { object: page } = await cosmic.objects
    .findOne({
      type: "pages",
      slug: "work",
    })
    .props("slug,title,metadata")
    .depth(1);

  const { objects: services } = await cosmic.objects
    .find({ type: "services" })
    .props("slug,title")
    .depth(1)
    .limit(100);

  let query: any = { type: "projects", status: "published" };
  if (selectedService) {
    // get single service based on slug
    const { object: service } = await cosmic.objects
      .findOne({ type: "services", slug: selectedService })
      .props("slug,title")
      .depth(1);
    // Filter op gerelateerde service slug
    query = {
      type: 'projects', "$and": [
        { status: "published" },
        { "metadata.service": service.id }
      ]
    }
  }

  return (
    <main className="p-4">
      <section className="pb-8 m-auto">
        <div className="m-auto flex lg:container flex-col items-start gap-2">
          <h1 className="mb-4 m-auto md:mx-0 text-3xl md:text-6xl font-display text-zinc-900 dark:text-zinc-100 leading-tight tracking-tighter">
            {page.metadata.h1}
          </h1>
          <div>
            <div
              dangerouslySetInnerHTML={{ __html: page.metadata.content }}
              className="text-xl text-zinc-700 dark:text-zinc-300"
            />
          </div>

          <WorkFilters services={services} selectedService={selectedService} />

          <PortfolioOverview query={query} limit={1000} />
        </div>
      </section>

      <section className="pb-8 m-auto">
        <div className="container">
          <CtaSection />
        </div>
      </section>
    </main>
  );
}
