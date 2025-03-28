"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const PricingToggle = () => {
  const currentPath = usePathname();
  // make a state to toggle between yearly and monthly prices
  const [yearly, setYearly] = useState(false);

  return (
    <div className="inline-flex items-center justify-center bg-light-50/25 rounded-full -mb-1" onChange={e => console.log(e)}>
      <Link
        href={{ pathname: currentPath, query: { pricing: "monthly" } }}
        className="btn !rounded-full !bg-light-50 !text-white !mb-0"
        scroll={false}
        onClick={() => setYearly(false)}
      >
        Monthly
      </Link>
      <Link
        href={{ pathname: currentPath, query: { pricing: "yearly" } }}
        className="btn !rounded-full !bg-primary !text-white !mb-0"
        scroll={false}
        onClick={() => setYearly(true)}
      >
        Yearly
      </Link>
    </div>
  );
}

export default PricingToggle