import Link from "next/link";
import { cosmic } from "@/cosmic/client";
import { ArrowRightIcon } from "lucide-react";
import { buttonVariants } from "@/cosmic/elements/Button";
import { MailIcon, PhoneIcon } from "lucide-react";
import { NavMenu } from "@/cosmic/blocks/navigation-menu/NavMenu";

const Footer = async () => {
  const { object: settings } = await cosmic.objects
    .findOne({
      type: "global-settings",
      slug: "settings",
    })
    .props("metadata")
    .depth(1);

  type Link = {
    url: string;
    company: string;
    icon: {
      imgix_url: string;
    };
  };

  return (
    <footer className="m-2 lg:m-12 mb-6 relative z-[999]">
      <div className="bg-primary rounded-[3rem] px-4 py-12 md:p-24 shadow-2xl">
        <div className="container mx-auto flex flex-col gap-24">
          <div className="text-center md:text-left flex flex-col gap-6 items-center md:items-start">
            <div>
              <h5 className="text-2xl font-semibold text-white md:text-4xl lg:text-6xl">
                Hello, let&apos;s work together
              </h5>
            </div>
            <div className="flex gap-4 align-center items-center">
              <h5 className="hidden md:block text-2xl md:text-4xl lg:text-6xl font-semibold text-light-50 flex-shrink-0">
                over here
              </h5>
              <ArrowRightIcon className="hidden md:block text-light-50 h-12 w-12 mt-2" />
              <Link className="footer-btn" href="mailto:jef@jeffasseur.be">
                <MailIcon className="mr-2 w-6" />
                <span className="flex-shrink-0">Send me an e-mail</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center md:items-end">
            <div>
              <h5 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-light-50">
                Get your strategy call
              </h5>
            </div>
            <div className="flex gap-4 align-center items-center">
              <Link
                className="footer-btn"
                href="https://calendly.com/jef-fasseur/online-coffee"
                target="_blank"
              >
                <PhoneIcon className="mr-2 w-6" />
                <span className="flex-shrink-0">Book a call</span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 mt-12">
            <div className="flex flex-col gap-6 order-last md:order-first">
              <Link className="text-white font-bold text-2xl" href="/">
                JEF .FASSEUR
              </Link>
              <div className="flex flex-col gap-2 text-light-80 text-sm">
                <p>BE0739922235</p>
                <Link href="mailto:sayhi@jeffasseur.be" className="underline">
                  sayhi@jeffasseur.be
                </Link>
              </div>
              <p className="text-light-80 flex-grow">
                Design & Develop amazing digital products with a focus on user
                experience.
              </p>
              <Link
                href="https://www.withlukas.be"
                target="_blank"
                rel="nofollow"
                className="text-light-30"
              >
                Designed by <span className="underline">WithLukas</span>
              </Link>
            </div>
            <div className="hidden menu-list flex-col gap-4 text-light-90">
              <h3 className="text-light-50 text-lg font-bold uppercase">
                Menu
              </h3>
              <NavMenu
                query={{
                  type: "navigation-menus",
                  slug: "footer",
                  hasMobileMenu: false,
                  status: "published",
                }}
                className="*:flex *:flex-col *:gap-4 -ml-4 *:text-light-90!"
              />
            </div>
            <div className="menu-list flex flex-col gap-4 text-light-90">
              <h3 className="text-light-50 text-lg font-bold uppercase">
                What we do
              </h3>
              <Link href="#">Web(flow) Website</Link>
              <Link href="#">Software & Web Application</Link>
              <Link href="#">Digital Content</Link>
              <Link href="#">SEA, SEO & Advertisement</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center gap-6 px-8 pt-6 md:grid md:grid-cols-3 md:gap-4">
        <div className="flex gap-4 justify-end order-last text-xs lg:text-sm">
          <a
            href="https://www.iubenda.com/privacy-policy/15316412"
            className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe"
            title="Privacy Policy "
          >
            Privacy Policy
          </a>
          <a
            href="https://www.iubenda.com/privacy-policy/15316412/cookie-policy"
            className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe"
            title="Cookie Policy "
          >
            Cookie Policy
          </a>
        </div>
        {/* <a href="https://www.withlukas.be" target="_blank" rel="nofollow" className="text-light-30 text-center">Designed by <span className='underline'>WithLukas</span></a> */}
        <p className="text-light-30 text-center text-xs lg:text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="uppercase">Jef .Fasseur</span> – All rights reserved.
        </p>
        <div className="flex gap-4 justify-start order-first">
          {/** Social media */}
          {settings.metadata.links.map((link: Link) => {
            return (
              <Link
                href={link.url}
                key={link.url}
                target="_blank"
                rel="noreferrer"
                className="dark:bg-light-50 dark:p-2 dark:rounded-sm"
              >
                <img
                  className="h-[26px]"
                  src={`${link.icon.imgix_url}?w=500&auto=format,compression`}
                  alt={link.company}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="h-8"></div>
    </footer>
  );
};

export default Footer;
