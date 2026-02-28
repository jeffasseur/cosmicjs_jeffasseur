import Link from "next/link";

const Header = ({ services }: { services: any[] }) => {
  return (
    <header className="sticky top-0 -mt-12">
      {/* Add your header content here */}
      <div className="h-[100vh] pt-60 relative overflow-hidden text-white">
        <div className="h-[100vh] absolute inset-0">
          <div className="z-10 pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,#161616e6,#16161600_50%,#16161666)]"></div>
          <div className="z-10 bg-[#13179A] pointer-events-none mix-blend-hue absolute inset-0"></div>
          <div className="z-10 absolute inset-top-auto inset-x-0 bottom-[3rem]">
            <div className="container mx-auto">
              <div className="flex flex-col items-start w-full">
                <div className="mb-4 flex flex-col justify-center items-end self-end">
                  {services.map((service: any, index: number) => {
                    return (
                      <Link
                        href={`/services/${service.slug}`}
                        key={index}
                        className="text-sm py-1 mb-2 font-medium font-mono text-right tracking-widest text-light-90"
                        data-underline-link
                      >
                        {service.title}
                      </Link>
                    );
                  })}
                </div>
                <h1 className="flex flex-col items-start text-h1 font-normal w-full">
                  <span className="block" style={{ letterSpacing: "-0.07em" }}>
                    Performance
                  </span>
                  <span
                    className="block text-h2 font-normal leading-[1.1] self-end"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    Development Expert
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
