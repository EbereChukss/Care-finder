"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { IoIosSettings } from "react-icons/io";

function About(): React.JSX.Element {
  const router = useRouter();

  const handleClick = (): void => {
    router.push("/sign-up");
  };

  return (
    <section className="mt-2" id="about">
      <div className="bg-gray-300">
        <div className="container mx-auto">
          <div className="px-4 my-28 pt-8 xl:pt-10 pb-24">
            <h1 className="text-4xl font-semibold text-bice-blue pt-8 tracking-tight leading-10">
              How it works?
            </h1>

            <div className="about-list mt-14 mb-20 grid gap-y-12 xl:grid-cols-3 gap-x-8">
              <div className=" flex flex-col gap-5 border shadow-2xl p-4">
                <IoIosSettings className="text-bice-blue text-4xl " />
                <div className="className">
                  <h2 className="text-3xl font-semibold text-bice-blue ">
                    Get Started
                  </h2>
                  <p className="text-gray-800 text-base">
                    Click the &apos;Get Started&apos; button to find healthcare
                    centers around you.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5 border shadow-2xl p-4">
                <IoIosSettings className="text-bice-blue text-4xl" />
                <div className="className">
                  <h2 className="text-3xl font-semibold text-bice-blue">
                    Search
                  </h2>
                  <p className="text-gray-800 text-base">
                    Search for preferred hospital name and address near your
                    location or select from a list of nearby hospitals.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5 border shadow-2xl p-4">
                <IoIosSettings className="text-bice-blue text-4xl" />
                <div className="className">
                  <h2 className="text-3xl font-semibold text-bice-blue">
                    Select
                  </h2>
                  <p className="text-gray-800 text-base">
                    Click on the marker on the map to view more information
                    about your selected hospital.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5 border shadow-2xl p-4">
                <IoIosSettings className="text-bice-blue text-4xl" />
                <div className="className">
                  <h2 className="text-3xl font-semibold text-bice-blue">
                    Share
                  </h2>
                  <p className="text-gray-800 text-base">
                    Carefinder allows users share list of hospitals with others.
                    Users can generate a shareable link or download the CSV file
                    directly from the device.{" "}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5 border shadow-2xl p-4">
                <IoIosSettings className="text-bice-blue text-4xl" />
                <div className="className">
                  <h2 className="text-3xl font-semibold text-bice-blue">
                    Sign Up
                  </h2>
                  <p className="text-gray-800">
                    Carefinder requires users to create an account to access the
                    platform&apos;s wonderful features.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5 border shadow-2xl p-4">
                <IoIosSettings className="text-bice-blue text-4xl" />
                <div className="className">
                  <h2 className="text-3xl font-semibold text-bice-blue">
                    Markdown Support
                  </h2>
                  <p className="text-gray-800">
                    Carefinder allows admin users to write content using
                    markdown.
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={handleClick}
              className="btn px-8 py-6 text-xl font-semibold text-gray-600 border rounded-full bg-manthis-green bg-opacity-40 mx-auto xl:mx-0"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
