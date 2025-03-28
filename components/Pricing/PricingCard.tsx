"use client";

import { useSearchParams } from "next/navigation";
import NumberFlow from '@number-flow/react'

import "./index.css";

const PricingCard = ({ title, description, price, content }: {title: string, description: string, price: number, content: any }) => {
  const yearly = useSearchParams().get('pricing') === 'yearly';
  const showPrice = yearly ? (price * 12) * 0.8 : price;
  return (
    <div className="gap-2 rounded-2xl p-8 cursor-pointer hover:scale-105 transition-all duration-500 flex-1 border-2 bg-light-80 border-light-70 dark:text-light-90 dark:bg-dark-80 dark:border-dark-50">
      <h3 className="text-lg md:text-xl font-bold">{title}</h3>
      <NumberFlow
        value={showPrice}
        format={{
          style: "currency",
          currency: "EUR",
          trailingZeroDisplay: "stripIfInteger",
        }}
        suffix={yearly ? " /year" : " /month"}
        className="text-3xl md:text-5xl font-light mb-8 text-dark-60 dark:text-light-90" // Add your custom class here
      />
      <button className="btn !rounded-full w-full">Get started</button>
      <p className="my-6 opacity-80 h-[4rem]">{description}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default PricingCard;