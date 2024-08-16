import React from "react";
import Image from "next/image";


function Newsletter(): React.JSX.Element {
  return (
    <section
      className="p-4 mt-20 bg-bice-blue bg-opacity-25 md:h-[444px] py-12 flex items-center relative overflow-hidden"
      id="newsletter"
    >
      <div className="absolute left-0 bottom-0 ">
        <Image src={"/pattern-bg.png"} alt="pattern for newsletter" width={500} height={500}  className="w-auto"/>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-[58px]">
          {/*text*/}
          <div className="flex-1 z-10 text-center md:text-left">
            <div className="text-base uppercase text-white tracking-[2.24px] font-medium">
              Our newsletter.
            </div>
            <h1 className=" text-3xl xl:text-6xl mb-4 text-white">
              Subscribe to get more updates
            </h1>
          </div>
          {/*newsletter form*/}
          <form action="" className="flex-1">
            <div className="flex flex-col md:flex-row relative gap-y-4">
              <input
                type="text"
                placeholder="Your email address"
                className="rounded-full w-full h-[66px] bg-transparent border-2 border-white outline-none pl-[30px] placeholder:text-white focus:text-white"
              />
              <button className="text-base font-medium uppercase text-gray-400 rounded-full py-5 px-10 bg-white md:absolute right-0">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
