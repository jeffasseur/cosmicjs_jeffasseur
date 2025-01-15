// components/product-card.tsx
import Link from "next/link";
import { cn } from "@/cosmic/utils";
import { ArrowRightIcon } from "lucide-react";

export type ProductType = {
  id: string;
  title: string;
  slug: string;
  metadata: {
    image: {
      imgix_url: string;
    };
    description: string;
    price: number;
  };
};

export function ProductCard({
  product,
  className,
}: {
  product: ProductType;
  className?: string;
}) {
  return (
    <Link
      href={`/services/${product.slug}`}
      className={cn("group relative", className)}
    >
      <div className="aspect-video w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
        <img
          src={`${product.metadata.image?.imgix_url}?w=1200&auto=format,compression`}
          alt={product.title}
          className="h-full w-full border border-zinc-100 object-cover object-center dark:border-zinc-800 lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-2 flex flex-col gap-2 justify-between">
        <div className="flex items-center justify-between">
          <h4 className="text-zinc-700 dark:text-zinc-300">
            <span aria-hidden="true" className="absolute inset-0"></span>
            {product.title}
          </h4>
          <ArrowRightIcon className="h-6 w-6" />
        </div>
        {/* <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50 flex-shrink-0">
          from € {product.metadata.price.toLocaleString("be-BE")}
        </p> */}
      </div>
    </Link>
  );
}
