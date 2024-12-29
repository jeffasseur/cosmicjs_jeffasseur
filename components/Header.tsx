// components/header.tsx
import Link from "next/link";
import { cosmic } from "@/cosmic/client";
import { NavMenu } from "@/cosmic/blocks/navigation-menu/NavMenu";

export default async function Header() {
  // Header data
  const { object: settings } = await cosmic.objects
    .findOne({
      type: "global-settings",
      slug: "settings",
    })
    .props("metadata")
    .depth(1);

  return (
    <nav className="relative w-full h-32">
      <div className="bg-white w-full rounded-none flex items-center justify-between pt-8 px-8 py-4 gap-16 lg:pt-4 lg:px-24 lg:justify-center lg:w-auto lg:rounded-full lg:bg-light-90 fixed lg:top-8 left-1/2 -translate-x-1/2 lg:backdrop:shadow-lg z-[9999]">
        <Link href="/" className="flex-shrink-0">
          <img
            src={`${settings.metadata.logo.imgix_url}?w=500&auto=format,compression`}
            alt={settings.metadata.company}
            className="h-10 w-auto dark:hidden"
          />
          <img
            src={`${settings.metadata.dark_logo.imgix_url}?w=500&auto=format,compression`}
            alt={settings.metadata.company}
            className="h-10 w-auto hidden dark:block"
          />
        </Link>
        <div className="flex items-center flex-wrap">
          <NavMenu
            query={{
              type: "navigation-menus",
              slug: "header",
            }}
            hasMobileMenu
            className="flex flex-wrap"
          />
        </div>
      </div>
    </nav>
  );
}
