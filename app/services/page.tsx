// app/page.tsx
import { cosmic } from "@/cosmic/client";
import { ProductList } from "@/cosmic/blocks/ecommerce/ProductList";
import { ImageGallery } from "@/cosmic/blocks/image-gallery/ImageGallery";
import { ProjectCard } from "@/components/project-card";

export default async function ShopPage() {
  const { object: page } = await cosmic.objects
    .findOne({
      type: "pages",
      slug: "services",
    })
    .props("slug,title,metadata")
    .depth(1);

    console.log("Services Page:", page);

    return (
      <>
        <section className="mt-12 pb-8">
          <div className="container mb-20">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:pb-12">
              <h1 className="m-0 font-display text-zinc-900 dark:text-zinc-100 max-w-3xl">
                {page.metadata.h1}
              </h1>
            </div>
          </div>
          <div className="container">
            <ProductList query={{ type: "services" }} />
          </div>
        </section>
      </>
    );
}
