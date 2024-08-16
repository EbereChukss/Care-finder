import React from "react";
import Faq from "@/components/faq";

function Contact(): React.JSX.Element {
  return (
    <>
      <section className="appointment-section p-4" id="contact">
        <div className="container mx-auto">
          <h2 className="text-3xl mb-5 xl:mb-[50px] text-center xl:text-left font-semibold">
            Book an Appointment or Call:{" "}
            <span className="text-bice-blue opacity-45">
              (+234)909 411 5467
            </span>
          </h2>

          {/*form*/}
          <form className="flex flex-col gap-y-5 border shadow-2xl p-10">
            {/*select wrapper */}
            <div className="flex flex-col xl:flex-row gap-5">
              <div className="relative items-center border bg-white select-text flex-1 rounded-lg">
                {/*select 1 */}
                <select className=" outline-none h-full w-full bg-transparent p-4">
                  <option value="1">Select Service</option>
                  <option value="2">Service 1</option>
                  <option value="3">Service 2</option>
                  <option value="4">Service 3</option>
                  <option value="5">Service 4</option>
                </select>
              </div>

              {/*select 2*/}
              <div className="relative items-center border bg-white select-auto flex-1 rounded-lg">
                <select className="outline-none h-full w-full bg-transparent p-4">
                  <option value="1">Select Day</option>
                  <option value="2">Monday</option>
                  <option value="3">Tuesday</option>
                  <option value="4">Wednesday</option>
                  <option value="5">Thursday</option>
                  <option value="5">Friday</option>
                  <option value="5">Saturday</option>
                  <option value="5">Sunday</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row gap-5">
              <input
                type="text"
                className="input flex-1 p-3 border rounded-lg outline-none"
                placeholder="Full Name"
              />
              <input
                type="tel"
                className="input flex-1 p-3 border rounded-lg outline-none"
                placeholder="Phone Number"
              />
            </div>
            <div className="flex flex-col xl:flex-row gap-5">
              <input
                type="date"
                className="input flex-1 p-3 border rounded-lg outline-none"
              />
              <input
                type="time"
                className="input flex-1 p-3 border rounded-lg outline-none"
              />
            </div>

            {/*submit button*/}
            <button
              type="submit"
              className="border rounded-full bg-manthis-green bg-opacity-55 self-start xl:self-center p-8 text-xl font-semibold text-white mt-10"
            >
              BOOK AN APPOINTMENT
            </button>
          </form>
        </div>
      </section>
      <Faq />
    </>
  );
}

export default Contact;
