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
    <main className="p-4">
      <section>
        <div className="container mx-auto">
          <div className="mb-24">
            <h1 className="text-3xl md:text-6xl font-display text-zinc-900 dark:text-zinc-100 leading-tight tracking-tighter mb-4">
              {page.metadata.h1}
            </h1>
            <p className="text-lg md:text-2xl text-zinc-900 dark:text-zinc-100 tracking-tighter">
              {page.metadata.subheadline}
            </p>
          </div>
          <div>
            <div className="relative flex flex-col justify-end w-full rounded-lg overflow-hidden min-h-[23rem] bg-light-80">
              <img
                src="#"
                alt="#"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <h2 className="px-4 py-6">Digital growth agency</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="md:container pb-8 m-auto">
        <div className="m-auto flex max-w-[950px] flex-col items-start gap-2">
          <h1 className="mb-4 m-auto md:mx-0 text-3xl md:text-6xl font-display text-zinc-900 dark:text-zinc-100 leading-tight tracking-tighter">
            {page.metadata.h1}
          </h1>
          <h2 className="text-lg md:text-2xl text-zinc-900 dark:text-zinc-100 tracking-tighter justify-center flex">
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
    </main>
  );
}
