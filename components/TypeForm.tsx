"use client";
import { useState, useEffect } from 'react';
import Script from 'next/script';

const TypeForm = () => {
  const [isClient, setIsClient] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      <div data-tf-live="01J6C94BDY9KSZHC8H0VB958T1"></div>
      <Script src="//embed.typeform.com/next/embed.js" />
    </>
  );
};

export default TypeForm;