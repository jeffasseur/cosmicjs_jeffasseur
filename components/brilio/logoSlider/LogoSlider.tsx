import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

const logos = [
  {
    title: "Jef Fasseur - OccO",
    url: "https://res.cloudinary.com/dfi4sldbm/image/upload/v1727511801/logo%27s/thumbnail_occo_nglhwf.png",
    link: "https://occo.be/",
  },
  {
    title: "Jef Fasseur - Emdyn",
    url: "https://res.cloudinary.com/dfi4sldbm/image/upload/v1727511618/logo%27s/Logo_full_ql9flx.svg",
    link: "https://emdyn.com/",
  },
  {
    title: "Jef Fasseur - Plenion",
    url: "https://res.cloudinary.com/dfi4sldbm/image/upload/v1727511562/logo%27s/Logo_Plenion_Web_avvg7u.svg",
    link: "https://plenion.be/",
  },
  {
    title: "Jef Fasseur - Cappuccino",
    url: "https://res.cloudinary.com/dfi4sldbm/image/upload/v1727511644/logo%27s/logo-cappuccino-black_k2rzfl.svg",
    link: "https://cappuccino-oostende.be",
  },
  {
    title: "Belfine - Belgian Chocolate",
    url: "https://res.cloudinary.com/dfi4sldbm/image/upload/v1751397000/Belfine-logo_nqbezn.webp",
    link: "https://belfine.be/",
  },
  {
    title: "Thomas More University of Applied Sciences",
    url: "https://res.cloudinary.com/dfi4sldbm/image/upload/v1751397004/thomasmore_logo_oranje_ad0alj.svg",
    link: "#",
  },
  {
    title: "TCR Group",
    url: "https://res.cloudinary.com/dfi4sldbm/image/upload/v1761646462/TCR-logo-colored_vckxbs.svg",
    link: "https://tcr-group.com",
  },
  {
    title: "WhyNot Gent",
    url: "https://res.cloudinary.com/dfi4sldbm/image/upload/v1761646594/whynot-gent-logo_drwtay.png",
    link: "https://whynot.gent",
  },
  {
    title: "iKAG - I know a guy",
    url: "https://res.cloudinary.com/dfi4sldbm/image/upload/v1761646729/ikag-logo_vvbelw.svg",
    link: "#",
  },
  {
    title: "Remarkable EU",
    url: "https://res.cloudinary.com/dfi4sldbm/image/upload/v1762530192/REMARKABLE_RGB_DESCRIPTOR_V_DIAP_kfy6n7.png",
    link: "https://remarkable.eu",
  },
  {
    title: "Kijzer",
    url: "https://imgix.cosmicjs.com/dafb1e00-d39a-11f0-8d90-59746c6baee3-kijzer.png?w=200&auto=format,compression",
    link: "https://kijzer.be",
  },
];

const LogoSlider = () => {
  return (
    <div className="flex flex-col gap-0 items-center overflow-hidden">
      <h2 className="text-xl dark:text-dark-90 mb-0">Trusted by</h2>
      <div className={styles.marquee}>
        <ul className="!list-none flex flex-wrap gap-[50px]">
          {logos.map((logo, index) => (
            <li key={index} className={styles.item}>
              <Link href={logo.link} target="_blank">
                <div className={`${styles.marqueeItem} rounded`}>
                  <div className={styles.marqueeContent}>
                    <Image
                      key={index}
                      src={logo.url}
                      alt={logo.title}
                      fill
                      className="rounded-none max-w-[80%] mx-auto object-contain"
                    />
                  </div>
                </div>
              </Link>
            </li>
          ))}
          {logos.map((logo, index) => (
            <li key={index} className={styles.item}>
              <Link href={logo.link} target="_blank">
                <div className={`${styles.marqueeItem} rounded`}>
                  <div className={styles.marqueeContent}>
                    <Image
                      key={index}
                      src={logo.url}
                      alt={logo.title}
                      fill
                      className="rounded-none max-w-[80%] mx-auto object-contain"
                    />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LogoSlider;
