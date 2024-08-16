"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";

function NavBar(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleClick = (): void => {
    router.push("/admin-login");
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 134) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`fixed top-0 z-30 w-screen py-8 lg:pt-6 lg:pb-6 bg-manthis-green ${
        scrolled && "bg-manthis-green bg-opacity-100"
      }`}
    >
      <div className="container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-y-0">
        {/* Logo and Hmaburger Icon */}
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-3 lg:justify-normal">
            <a href="#">
              <Image
                src={"/carefinder.jpg"}
                alt="carefinder-logo"
                width={70}
                height={70}
                className=" pl-2"
              />
            </a>
            <p className="text-bice-blue text-2xl font-bold hover:text-white">
              CareFinder
            </p>
          </div>
          {/* Hamburger Menu */}
          <button
            aria-label="Toggle-menu"
            className="lg:hidden text-4xl p-4 text-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <RxHamburgerMenu />
          </button>
        </div>
        {/* Navigation Links */}
        <div
          className={`flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0 items-center ${
            isOpen ? "block" : "hidden"
          } lg:block`}
        >
          <a
            href="#"
            className={`text-bice-blue hover:text-white text-2xl font-semibold mx-2 lg:mx-4 ${
              scrolled && "hover:text-white"
            }`}
          >
            Home
          </a>
          <a
            href="#about"
            className={`text-bice-blue hover:text-white text-2xl font-semibold mx-2 lg:mx-4 ${
              scrolled && "hover:text-white"
            }`}
          >
            About
          </a>
          <a
            href="#services"
            className={`text-bice-blue hover:text-white text-2xl font-semibold mx-2 lg:mx-4 ${
              scrolled && "hover:text-white"
            }`}
          >
            Services
          </a>
          <a
            href="#blog"
            className={`text-bice-blue hover:text-white text-2xl font-semibold mx-2 lg:mx-4 ${
              scrolled && "hover:text-white"
            }`}
          >
            Blog
          </a>
          <a
            href="#contact"
            className={`text-bice-blue hover:text-white text-2xl font-semibold mx-2 lg-mx-4 ${
              scrolled && "hover:text-white"
            }`}
          >
            Contact Us
          </a>
          <a href="#" className="mx-2- lg:mx-4">
            <button
              onClick={handleClick}
              className="p-3 text-bice-blue bg-white bg-opacity-30 hover:text-white rounded-lg text-2xl font-semibold border-2 border-white "
            >
              Admin Portal
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default NavBar;
