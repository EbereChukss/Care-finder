"use client";
import React from "react";
import Papa from "papaparse";
import { Hospital } from "../app/(mainPage)/hospitals/interface";

interface ShareCSVProps {
  hospitals: Hospital[];
}

const ShareCSV: React.FC<ShareCSVProps> = ({ hospitals }) => {
  const shareCSV = (): void => {
    const csvData = hospitals.map((hospital) => ({
      Name: hospital?.name,
      State: hospital?.state?.name,
      Address: hospital?.address,
      PhoneNumber: hospital?.phone_number,
      Email: `${hospital?.name}@gmail.com`,
    }));

    const csv: string = Papa.unparse(csvData);
    const blob: Blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const file: File = new File([blob], "hospitals.csv", { type: "text/csv" });

    if (navigator.share) {
      navigator
        .share({
          title: "Hospitals near me",
          text: "Check out the list of hospitals near me!",
          files: [file],
        })
        .then(() => {
          console.log("Successfully shared");
        })
        .catch((error) => {
          console.error("Failed to share", error);
        });
    } else {
      console.log("Web Share API not supported in your browser!");
    }
  };

  return (
    <button
      onClick={shareCSV}
      className="px-6 py-2 bg-bice-blue bg-opacity-40 lg:text-2xl text-white rounded-full"
    >
      Share CSV
    </button>
  );
};

export default ShareCSV;
