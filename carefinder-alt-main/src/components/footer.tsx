import React from "react";
import { FiMapPin } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

function Footer(): React.JSX.Element {
  return (
    <footer className="bg-slate-200" id="footer">
      <div className="container mx-auto p-8">
        <div className="flex flex-col xl:flex-row gap-x-5 gap-y-10">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <a href="">
                <Image
                  src={"/carefinder.jpg"}
                  alt="header-logo"
                  width={100}
                  height={100}
                  className=" mb-[30px] "
                />
              </a>
              <h2 className="text-2xl font-semibold text-manthis-green">
                Carefinder
              </h2>
            </div>
            <p className="text-base text-gray-600 mb-[20px]">
              CareFinder is a leading provider of personalized care solutions
            </p>

            <div className="flex flex-col gap-y-3 mb-10">
              <div className="flex items-center gap-x-[6px]">
                <FiMapPin className="text-[24px] text-bice-blue" />
                <div className="location">
                  No.7 Adetokumbo street, Kubwa, Abuja.
                </div>
              </div>
              <div className="flex items-center gap-x-[6px]">
                <IoIosMail className="text-[24px] text-bice-blue" />
                <div className="location">carefinder@email.com</div>
              </div>
              <div className="flex items-center gap-x-[7px]">
                <FaPhone className="text-[24px] text-bice-blue" />
                <div className="location">(+234)909 411 5467</div>
              </div>
            </div>
            {/*socials*/}
            <div className="flex gap-[14px] text-[30px]">
              <div className="p-[10px] rounded-[10px] shadow-2xl text-bice-blue hover:opacity-25 cursor-pointer transition-all">
                <FaFacebook />
              </div>
              <div className="p-[10px] rounded-[10px] shadow-2xl text-bice-blue hover:opacity-25 cursor-pointer transition-all">
                <FaInstagram />
              </div>
              <div className="p-[10px] rounded-[10px] shadow-2xl text-bice-blue hover:opacity-25 cursor-pointer transition-all">
                <FaSquareXTwitter />
              </div>
              <div className="p-[10px] rounded-[10px] shadow-2xl text-bice-blue hover:opacity-25 cursor-pointer transition-all">
                <FaLinkedin />
              </div>
            </div>
          </div>
          {/*Quick Links*/}
          <div className="flex-1">
            <h4 className="text-xl font-semibold mb-5 text-manthis-green">
              Quick links
            </h4>
            <div className="">
              <ul className=" flex-1 flex flex-col gap-y-5">
                <li className="">
                  <a href="#" className="hover:text-bice-blue transition-all">
                    Home
                  </a>
                </li>
                <li className="">
                  <a href="#" className="hover:text-bice-blue transition-all">
                    About
                  </a>
                </li>
                <li className="">
                  <a href="#" className="hover:text-bice-blue transition-all">
                    Admin Portal
                  </a>
                </li>
                <li className="">
                  <a href="#" className="hover:text-bice-blue transition-all">
                    Book an Appointment
                  </a>
                </li>
                <li className="">
                  <a href="#" className="hover:text-bice-blue transition-all">
                    Services
                  </a>
                </li>
                <li className="">
                  <a href="#" className="hover:text-bice-blue transition-all">
                    Blog
                  </a>
                </li>
                <li className="">
                  <a href="#" className="hover:text-bice-blue transition-all">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/*Opening hours*/}
          <div className="flex-1">
            <h4 className=" text-manthis-green text-xl font-semibold pb-4">
              Opening Hours
            </h4>

            <div className="flex flex-col gap-5">
              <div className="flex-1">
                <div className="flex justify-between items-center border-b pb-[10px]">
                  <div className="className">Monday-Thursday</div>
                  <div className="text-bice-blue font-medium">
                    8:00AM to 6:00PM
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center border-b pb-[10px]">
                  <div className="className">Friday-Saturday</div>
                  <div className="text-bice-blue font-medium">
                    10:00AM to 4:00PM
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center border-b pb-[10px]">
                  <div className="className">Sunday</div>
                  <div className="text-bice-blue font-medium">
                    Emergency Only
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center border-b pb-[10px]">
                  <div className="className">Personal</div>
                  <div className="text-bice-blue font-medium">
                    7:00AM to 9:00PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Copyright section*/}
      <div className="container mx-auto py-[30px] border-t text-center">
        <div className="container mx-auto text-bice-blue">
          <div className="font-light text-base">
            &copy;2024 Carefinder - All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
