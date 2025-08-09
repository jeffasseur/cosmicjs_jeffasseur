import Image from "next/image";
import styles from "./styles.module.css";

const logos = [
  {
    title: "Jef Fasseur - OccO",
    url: "https://res.cloudinary.com/dfi4sldbm/image/upload/v1727511801/logo%27s/thumbnail_occo_nglhwf.png",
  },
  {
    title: "Jef Fasseur - GoForGrowth",
    url: "https://res.cloudinary.com/dfi4sldbm/image/upload/v1727511680/logo%27s/GFG-logo_viuwnf.svg",
  },
  {
    title: "Jef Fasseur - Emdyn",
    url: "https://res.cloudinary.com/dfi4sldbm/image/upload/v1727511618/logo%27s/Logo_full_ql9flx.svg",
  },
  {
    title: "Jef Fasseur - Plenion",
    url: "https://res.cloudinary.com/dfi4sldbm/image/upload/v1727511562/logo%27s/Logo_Plenion_Web_avvg7u.svg",
  },
  {
    title: "Jef Fasseur - Cappuccino",
    url: "https://res.cloudinary.com/dfi4sldbm/image/upload/v1727511644/logo%27s/logo-cappuccino-black_k2rzfl.svg",
  },
  {
    title: "Jef Fasseur - Revi Food",
    url: "https://res.cloudinary.com/dfi4sldbm/image/upload/v1727511534/logo%27s/Revi-logo_ncvqa0.webp",
  },
  {
    title: "Belfine - Belgian Chocolate",
    url: "https://res.cloudinary.com/dfi4sldbm/image/upload/v1751397000/Belfine-logo_nqbezn.webp",
  },
  {
    title: "Thomas More University of Applied Sciences",
    url: "https://res.cloudinary.com/dfi4sldbm/image/upload/v1751397004/thomasmore_logo_oranje_ad0alj.svg",
  }
];

const LogoSlider = () => {
  return (
    <div className="flex flex-col gap-0 items-center overflow-hidden">
      <h2 className="text-xl dark:text-dark-90 mb-0">Trusted by</h2>
      <div className={styles.marquee}>
        <ul className="!list-none flex flex-wrap gap-[50px]">
          {logos.map((logo, index) => (
            <li key={index} className={styles.item}>
              <div className={`${styles.marqueeItem} rounded`}>
                <div className={styles.marqueeContent}>
                  <Image
                    key={index}
                    src={logo.url}
                    alt={logo.title}
                    fill
                    className="rounded-none max-w-[70%] mx-auto object-contain"
                  />
                </div>
              </div>
            </li>
          ))}
          {logos.map((logo, index) => (
            <li key={index} className={styles.item}>
              <div className={`${styles.marqueeItem} rounded`}>
                <div className={styles.marqueeContent}>
                  <Image
                    key={index}
                    src={logo.url}
                    alt={logo.title}
                    fill
                    className="rounded-none max-w-[70%] mx-auto object-contain"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LogoSlider;
