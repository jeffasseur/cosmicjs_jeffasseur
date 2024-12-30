import { cn } from "@/cosmic/utils";

export type TestimonialType = {
  title: string;
  slug: string;
  metadata: {
    company: string;
    position: string;
    quote: string;
    image: {
      imgix_url: string;
    };
  };
};

export function Testimonial({
  testimonial,
  className,
}: {
  testimonial: TestimonialType;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "mb-6 flex flex-col gap-4 overflow-hidden rounded-xl bg-white p-8 dark:bg-dark-80 md:flex-row md:p-0 shadow-md",
        className
      )}
    >
      <img
        className="h-24 w-24 rounded-full object-cover md:h-auto md:w-48 md:rounded-none"
        src={`${testimonial.metadata.image?.imgix_url}?w=500&h=500&auto=format,compression&fit=facearea&facepad=3`}
        alt={testimonial.title}
      />
      <div className="space-y-4 text-center md:p-8 md:text-left">
        <blockquote className="relative">
          <p className="relative z-10 text-lg text-zinc-600 dark:text-light-90">
            &quot;{testimonial.metadata.quote}&quot;
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-primary dark:text-light-50 text-lg">
            {testimonial.title}
          </div>
          <div className="text-sm text-zinc-500 dark:text-light-90">
            {testimonial.metadata.position}, {testimonial.metadata.company}
          </div>
        </figcaption>
      </div>
    </figure>
  );
}
