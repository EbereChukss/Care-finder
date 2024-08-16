"use client";
import React from "react";
import Papa from "papaparse";
import { Hospital } from "../app/(mainPage)/hospitals/interface";

interface ExportCSVProps {
  hospitals: Hospital[];
  searchQuery: string;
}

const ExportCSV: React.FC<ExportCSVProps> = ({ hospitals, searchQuery }) => {
  const exportToCSV = (): void => {
    const filteredHospitals: Hospital[] = hospitals.filter((hospital) =>
      hospital.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const csvData = filteredHospitals.map((hospital) => ({
      Name: hospital?.name,
      State: hospital?.state?.name,
      Address: hospital?.address,
      PhoneNumber: hospital?.phone_number,
      Email: `${hospital?.name}@gmail.com`,
    }));

    const csv: string = Papa.unparse(csvData);
    const blob: Blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link: HTMLAnchorElement = document.createElement("a");
    const url: string = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "hospitals.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={exportToCSV}
      className="px-6 py-2 bg-bice-blue bg-opacity-40 lg:text-2xl text-white rounded-full"
    >
      Export to CSV
    </button>
  );
};

export default ExportCSV;
