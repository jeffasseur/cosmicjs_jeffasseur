import Link from "next/link";

const CtaSection = () => {
  return (
    <div className="md:pb-12 relative my-40 mx-auto md:mt-0">
      <div className="grid lg:grid-cols-3 gap-12 mt-20 lg:mt-40">
        <div>
          <h3
            className="mb-4 text-2xl font-medium max-w-80 lg:text-3xl"
            style={{ opacity: 1 }}
          >
            Looking for a digital partner?
          </h3>
        </div>
        <div className="lg:col-span-2">
          <p className="mb-6 md:text-lg">
            Stand out in a busy market with a complete brand strategy & clear
            brand identity. Based on that we design & develop a powerful website
            that draws in potential clients.
            <br></br>
            <br></br>
            Do you already have a website? We can help you with a complete
            redesign or new features. Start a partnership with us and we will
            further take care of your digital presence.
          </p>
          <Link className="btn" href="/contact">
            Reach out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
