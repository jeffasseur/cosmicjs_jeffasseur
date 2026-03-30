import { cosmic } from "@/cosmic/client";
import PricingCard from "./PricingCard";
import PricingToggle from "./PricingToggle";
import { useRouter } from "next/router";


const PricingContainer = async () => {
  const { objects: carePackets } = await cosmic.objects
    .find({
      type: "care-packets",
    })
    .props("title,metadata")
    .depth(1);

  return (
    <div className="mt-28">
      <div className="mb-14">
        <h2 className="text-center max-w-[20ch] mx-auto">
          Keep your website running
        </h2>
        <p className="text-center mt-5 opacity-60 max-w-[30rem] mx-auto">
          We take care of your website, so you can focus on your business. Our
          care packets include regular updates, security checks, and performance
          optimizations to ensure your website runs smoothly and securely.
        </p>
      </div>
      <div className="mb-6 flex justify-center">
        <PricingToggle />
      </div>
      <div className="flex flex-col-reverse gap-8 xl:flex-row-reverse xl:gap-6 pt-12">
        {carePackets.map((carePacket: any, index: number) => (
          <PricingCard
            key={index}
            title={carePacket.title}
            price={carePacket.metadata.price}
            description={carePacket.metadata.description}
            content={carePacket.metadata.content}
          />
        ))}
      </div>
      <p className="text-center opacity-40 text-sm max-w-[30rem] mx-auto mt-8">
        *Prices are excl. VAT. All monthly plans can be cancelled at any time.
        The yearly plans are paid in advance and can be cancelled at the end of
        the year.
      </p>
    </div>
  );
}

export default PricingContainer;