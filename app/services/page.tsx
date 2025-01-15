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

  return (
    <>
      <section className="mt-12 pb-8">
        <div className="container mx-auto flex flex-col items-start gap-2">
          <h1 className="mb-4 m-auto md:mx-0 text-3xl md:text-6xl font-display text-zinc-900 dark:text-zinc-100 leading-tight tracking-tighter">
            {page.metadata.h1}
          </h1>
          <h2 className="text-lg md:text-2xl text-zinc-900 dark:text-zinc-100 tracking-tighter justify-center flex mb-6">
            {page.metadata.subheadline}
          </h2>
          <div>
            <div
              dangerouslySetInnerHTML={{ __html: page.metadata.content }}
              className="text-xl text-zinc-700 dark:text-zinc-300"
            />
          </div>
          <ProductList
            className="mt-6 w-full grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2 xl:gap-x-8"
            query={{ type: "services" }}
          />
        </div>
      </section>
    </>
  );
}
