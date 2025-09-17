"use client";
import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type Service = { slug: string; title: string };

export default function WorkFilters(props0: {
  services: Service[];
  selectedService?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const options = useMemo(() => {
    const uniqueBySlug = new Map<string, Service>();
    props0.services?.forEach((s: any) => {
      const slug = s?.slug ?? s?.metadata?.slug ?? "";
      const title = s?.title ?? s?.metadata?.title ?? slug;
      if (!slug) return;
      uniqueBySlug.set(slug, { slug, title });
    });
    return Array.from(uniqueBySlug.values()).sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }, [props0.services]);

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (!value) {
      params.delete("service");
    } else {
      params.set("service", value);
    }
    router.push(`/work?${params.toString()}`);
  };

  return (
    <fieldset className="w-full my-4">
      <legend className="block text-sm mb-3">Filter op service</legend>
      <div className="flex flex-wrap gap-2">
        {[{ slug: "", title: "Alle" }, ...options].map((s) => {
          const isSelected = (props0.selectedService ?? "") === s.slug;
          return (
            <label
              key={s.slug || "all"}
              className={
                `cursor-pointer select-none inline-flex items-center rounded-full border px-4 py-2 text-sm transition-colors ` +
                (isSelected
                  ? "border-primary bg-primary text-white dark:text-white"
                  : "border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-600")
              }
            >
              <input
                type="radio"
                name="service-filter"
                value={s.slug}
                checked={isSelected}
                onChange={() => handleChange(s.slug)}
                className="sr-only"
                aria-checked={isSelected}
              />
              <span>{s.title}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}


