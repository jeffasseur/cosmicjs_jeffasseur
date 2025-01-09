// app/shop/[slug]/page.tsx
import { SingleProduct } from "@/cosmic/blocks/ecommerce/SingleProduct";
import { cosmic } from "@/cosmic/client";

export const revalidate = 60;

export async function generateMetadata(
  props0: {
    params: Promise<{ slug: string }>;
  }
) {
  const params = await props0.params;
  const { object: product } = await cosmic.objects
    .findOne({
      type: "services",
      slug: params.slug,
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
export default async function SingleProductPage(
  props: {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{
      success?: string;
    }>;
  }
) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  return (
    <main className="p-4">
      <SingleProduct
        query={{ slug: params.slug, type: "services" }}
        purchased={searchParams.success ? true : false}
      />
    </main>
  );
}
