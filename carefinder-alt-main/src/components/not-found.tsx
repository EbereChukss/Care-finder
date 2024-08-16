import React from "react";
import Image from "next/image";

function NotFound(): React.JSX.Element {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-white">
      <div className="flex flex-col gap-3 w-full max-w-4xl">
        <div className="flex flex-col items-center justify-center ">
          <Image
            src={"/not-found.png"}
            alt="Not Found"
            width={1000}
            height={1000}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className=" text-4xl md:text-6xl text-center font-bold text-gray-800">
            404
          </h1>
          <h2 className=" text-2xl md:text-4xl font-bold text-gray-800 mt-2">
            Page Not Found
          </h2>
          <p className="text-lg  text-gray-600 mt-2">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <a
            href="/"
            className="text-lg text-manthis-green hover:text-bice-blue mt-4"
          >
            Return to Homepage
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
