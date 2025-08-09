// components/header.tsx
import Link from "next/link";
import { cosmic } from "@/cosmic/client";
import { NavMenu } from "@/cosmic/blocks/navigation-menu/NavMenu";
import Image from "next/image";

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
      <div className="w-full rounded-none bg-[rgba(255,255,255,0.2)] filter backdrop-blur-md flex items-center justify-between pt-8 px-8 py-4 gap-16 lg:grid lg:grid-cols-3 lg:pt-4 fixed left-1/2 -translate-x-1/2 z-[9999] dark:bg-light-50">
        <Link href="/" className="flex-shrink-0 *:rounded-none">
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
          <div className="hidden ml-4 3xl:flex items-center gap-2 flex-nowrap">
            <div className="relative rounded-full aspect-square w-12 h-12">
              <Image
                src="https://res.cloudinary.com/dfi4sldbm/image/upload/v1744035563/JEF-F-avatar-small_fcltdi.webp"
                alt="Jef Fasseur Avatar"
                fill
                className="object-cover rounded-full"
              />
              <div className="absolute right-1 bottom-0 h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <Link
              href="https://calendly.com/jef-fasseur/online-coffee"
              target="_blank"
              className="btn !rounded-full"
            >
              Book a call
            </Link>
          </div>
        </div>
        <div className="hidden place-self-end items-center gap-2 lg:flex">
          <div className="relative rounded-full aspect-square w-12 h-12">
            <Image
              src="https://res.cloudinary.com/dfi4sldbm/image/upload/v1744035563/JEF-F-avatar-small_fcltdi.webp"
              alt="Jef Fasseur Avatar"
              fill
              className="object-cover rounded-full"
            />
            <div className="absolute right-1 bottom-0 h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <Link
            href="https://calendly.com/jef-fasseur/online-coffee"
            target="_blank"
            className="btn !rounded-full"
          >
            Book a call
          </Link>
        </div>
      </div>
    </nav>
  );
}
