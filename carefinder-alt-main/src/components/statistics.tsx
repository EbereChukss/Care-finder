"use client";
import React from "react";
import CountUp from "react-countup";

function Statistics(): React.JSX.Element {
  return (
    <section className="services-section mb-10">
      <div className="container mx-auto ">
        <div className=" flex flex-col xl:flex-row gap-y-6 justify-between">
          <div className="flex-1 flex flex-col items-center">
            <div className="text-4xl xl:text-[64px] font-semibold text-bice-blue text-opacity-50 xl:mb-4 text-">
              <CountUp end={500} duration={2} prefix="+" />
            </div>
            <div className=" text-base font-medium text-gray-800">
              Happy patients
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="text-4xl xl:text-[64px] font-semibold text-bice-blue text-opacity-50 xl:mb-4">
              <CountUp end={10} duration={2} />
            </div>
            <div className=" text-base font-medium text-gray-800">
              Total Branches
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="text-4xl xl:text-[64px] font-semibold text-bice-blue text-opacity-50 xl:mb-4">
              <CountUp end={20} duration={2} prefix="+" />
            </div>
            <div className=" text-base font-medium text-gray-800">
              Senior Doctors
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="text-4xl xl:text-[64px] font-semibold text-bice-blue text-opacity-50 xl:mb-4">
              <CountUp end={2} duration={2} />
            </div>
            <div className=" text-base font-medium text-gray-800">
              Years Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
