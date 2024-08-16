"use client";
import React, { useState } from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

function Faq(): React.JSX.Element {
  // Created an array to hold the open/close state of each FAQ item
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleOpen = (index: number) => {
    setOpenIndexes(
      (prevIndexes) =>
        prevIndexes.includes(index)
          ? prevIndexes.filter((i) => i !== index) // Close if it's already open
          : [...prevIndexes, index] // Open if it's closed
    );
  };

  // An array holding the questions and their respective answers...
  const faqItems = [
    {
      question:
        "Why you should believe in Carefinder, to find healthcare centers close to you?",
      answer:
        "Carefinder is reliable due to its comprehensive database and user-friendly features, making it easy to find verified healthcare centers near you.",
    },
    {
      question: "Will we get healthcare updates?",
      answer:
        "Yes, Carefinder provides timely updates on healthcare facilities, ensuring you have the most current information available.",
    },
    {
      question:
        "Can I share the list of hospitals closest to me to others? How?",
      answer:
        "You can share the list via various platforms like email or social media directly from the Carefinder app.",
    },
    {
      question:
        "How long will it take to get locations of healthcare centers closest to me?",
      answer:
        "The locations of nearby healthcare centers are provided instantly after your search.",
    },
    {
      question:
        "What preparations are necessary before going to locations provided by Carefinder?",
      answer:
        "It is recommended to contact the healthcare center ahead to confirm services and availability before visiting.",
    },
    {
      question: "What are the benefits of Carefinder?",
      answer:
        "Carefinder offers quick access to a vast network of verified healthcare facilities, enhancing your ability to find and access medical care efficiently.",
    },
  ];

  return (
    <section className="className mt-20" id="faq">
      <div className="container mx-auto">
        <h2 className="text-5xl text-center mb-[50px] font-semibold text-manthis-green">
          We&apos;ve got answers.
        </h2>
        <div className="max-w-5xl mx-auto">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="px-[30px] pt-7 pb-4 border-b cursor-pointer select-none"
              onClick={() => toggleOpen(index)}
            >
              <div className="flex items-center justify-between mb-[10px]">
                {/* title */}
                <h4 className="text-xl">{item.question}</h4>
                {/* icon */}
                <div className="text-manthis-green text-2xl">
                  {openIndexes.includes(index) ? <IoMdRemove /> : <IoMdAdd />}
                </div>
              </div>
              {/* answer text */}
              <div
                className={`transition-height duration-500 ease-in-out ${
                  openIndexes.includes(index) ? "h-auto" : "h-0 overflow-hidden"
                }`}
              >
                <p className="font-light">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
