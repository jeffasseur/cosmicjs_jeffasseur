"use client";

import { useState } from "react";
import { ContentInterface } from "@/interfaces";

const AccordionItem = ({
  content,
  index,
}: {
  content: ContentInterface;
  index: number;
}) => {
  const [showPannel, setShowPannel] = useState(false);

  function handleClick() {
    setShowPannel(!showPannel);
  }

  return (
    <div className="flex flex-col px-12">
      <div
        className="flex justify-start gap-6 p-2 items-center cursor-pointer md:justify-between select-none"
        onClick={handleClick}
      >
        <span className="text-xl font-medium md:mt-6">{index}</span>
        <h3 className="text-2xl font-medium text-center leading-normal md:text-4xl">
          {content.title}
        </h3>
        <svg
          className="w-6 h-6 md:w-8 md:h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 9.5L12 16.5L5 9.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {showPannel && (
        <div className="flex flex-col gap-4 justify-center items-center pt-4 px-2 mt-4 mb-6 transition-all transition-300 answer">
          <div className="leading-normal font-light text-dark-70 max-w-[40rem] md:text-xl">
            <div
              dangerouslySetInnerHTML={{
                __html: content?.metadata?.description,
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
