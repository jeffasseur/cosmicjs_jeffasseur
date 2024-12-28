import Image from "next/image";

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
];

const LogoSlider = () => {
  return (
    <div className="flex flex-col gap-4 items-center py-4 lg:p-6 lg:rounded-full lg:bg-light-70">
      <h2 className="text-2xl font-bold dark:text-dark-90">Trusted by</h2>
      <div className="flex items-center gap-20 justify-center flex-wrap overflow-hidden lg:flex-nowrap">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo.url}
            alt={logo.title}
            width={100}
            height={100}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
