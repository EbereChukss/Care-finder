"use client";
import React from "react";
import { FaHeartbeat } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Hero(): React.ReactElement {
  const router = useRouter();

  const handleClick = (): void => {
    router.push("/sign-up");
  };

  return (
    <section className="py-12 xl:pt-12 xl:pb-0 overflow-hidden mt-24">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between h-full">
          <div className="hero-text xl:w-[48%] text-center xl:text-left">
            <div className="flex items-center bg-white py-[10px] px-[20px] w-max gap-x-2 mb-[26px] rounded-full mx-auto xl:mx-0">
              <FaHeartbeat className="text-4xl text-manthis-green" />
              <div className="uppercase text-base font-medium text-[#9ab4b7] tracking-[2.24px]">
                Live your best life
              </div>
            </div>
            <h1 className="text-4xl font-semibold mb-6">
              We care about your health.
            </h1>
            <p className=" text-xl leading-7 mb-[42px] md:max-w-xl">
              At Carefinder, we seek is to address the challenges associated
              with accessing healthcare in Nigeria by providing a user-friendly
              platform that helps users locate, export, and share information
              about hospitals in their region. Findling the nearest care has
              never been easier.
            </p>
            <button
              onClick={handleClick}
              className="btn px-8 py-4 text-xl font-semibold text-gray-600 border rounded-full bg-manthis-green bg-opacity-40 mx-auto xl:mx-0"
            >
              Get Started
            </button>
          </div>
          <div className="hero-banner hidden xl:flex max-w-[814px] self-end">
            <Image src={"/hero-banner.png"} alt="hero-banner" width={500} height={500} className="h-auto"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
