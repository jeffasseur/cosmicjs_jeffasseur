import { cosmic } from "@/cosmic/client";
import { TestimonialType } from "@/interfaces";

import "swiper/css";
import SwiperComponent from "@/components/Swiper";

export async function Testimonials({
  query,
  sort,
  limit,
  skip,
  className,
  status,
}: {
  query: any;
  sort?: string;
  limit?: number;
  skip?: number;
  className?: string;
  status?: "draft" | "published" | "any";
}) {
  const { objects: testimonials }: { objects: TestimonialType[] } =
    await cosmic.objects
      .find(query)
      .props("id,slug,title,metadata")
      .depth(1)
      .sort(sort ? sort : "-order")
      .limit(limit ? limit : 100)
      .skip(skip ? skip : 0)
      .status(status ? status : "published");
  return (
    <div className={className}>
      <SwiperComponent testimonials={testimonials} />
    </div>
  );
}
