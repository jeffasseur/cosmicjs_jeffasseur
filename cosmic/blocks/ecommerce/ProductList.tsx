import { cosmic } from "@/cosmic/client";
import { ProductCard, ProductType } from "./ProductCard";

export async function ProductList({
  query,
  className,
  status,
}: {
  query: any;
  className?: string;
  status?: "draft" | "published" | "any";
}) {
  const { objects: products } = await cosmic.objects
    .find(query)
    .props("id,slug,title,metadata")
    .depth(1)
    .status(status ? status : "published");

  return (
    <div className={className}>
      <ul>
        {products.map((service: ProductType) => {
          return (
            <li className="m-0 p-0 list-none border-t border-t-light-70 service-row lg:flex">
              <div className="col col-title">
                <p>{service.title}</p>
              </div>
              <div
                className="col col-text"
                dangerouslySetInnerHTML={{
                  __html: service.metadata.description,
                }}
              />
              {/* TODO: add tags
               <div>
                <ul className="*:list-none *:pl-0 *:ml-0 *:font-semibold">
                  <li>Webflow</li>
                  <li>Wordpress</li>
                  <li>Shopify</li>
                </ul>
              </div> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
