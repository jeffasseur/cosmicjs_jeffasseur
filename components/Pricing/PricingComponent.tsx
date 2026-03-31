import PricingCard from "./PricingCard";
import PricingToggle from "./PricingToggle";
import { PricingPacket } from "@/interfaces";

const PricingContainer = async ({
  title,
  description,
  packets,
  yearly,
}: {
  title: string;
  description: string;
  packets: PricingPacket[];
  yearly: boolean;
}) => {
  return (
    <div className="mt-28">
      <div className="mb-14">
        <h2 className="text-center max-w-[20ch] mx-auto">{title}</h2>
        <p className="text-center mt-5 opacity-60 max-w-[30rem] mx-auto">
          {description}
        </p>
      </div>
      {yearly && (
        <div className="mb-6 flex justify-center">
          <PricingToggle />
        </div>
      )}
      <div className="flex flex-col-reverse gap-8 xl:flex-row-reverse xl:gap-6 pt-12">
        {packets.map((carePacket: PricingPacket, index: number) => (
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
};

export default PricingContainer;
