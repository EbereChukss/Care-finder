import React from "react";
import Statistics from "@/components/statistics";
import Image from "next/image";

function Services(): React.JSX.Element {
  return (
    <>
    <Statistics />
    <section className="services-section mb-20" id="services">
      <div className="bg-bice-blue bg-opacity-30 bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative h-[368px] flex items-center xl:items-start -z-10">
        <div className="container mx-auto">
          <div className="flex flex-col items-center xl:flex-row xl:mb-[60px]">
            <h2 className="md:text-3xl font-semibold  text-white flex-1 mb-4 xl:mb-0 text-center xl:text-left ">
              Our Best Services For Your Solution
            </h2>
            <p className=" text-base text-white flex-1 text-center xl:text-left max-w-2xl xl:max-w-none">
              Carefinder is dedicated to making healthcare accessible and
              efficient for users across Nigeria. By connecting you to services
              such as consultaion, emergency checkup, pregnancy care,
              pharmaceutical care, nutritional care, and cardiology nearest to
              you, making healthcare easily accessible.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-8 xl:-mt-[144px]">
        <div className="grid xl:grid-cols-4 gap-5 px-8 xl:px-0 ">
          <div className="service-item bg-white p-[30px] rounded-[10px] shadow-2xl min-h-[288px] flex flex-col items-center text-center">
            <div className="grid-item-icon mb-[15px]">
              <Image src={"/icon-2.png"} alt="medical-icon" width={60} height={60} className="w-auto h-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-[10px]">
              Consultaion and Emergency Checkup
            </h3>
            <p className="description font-light leading-normal max-w-[300px]">
              Carefinder&apos;s general consultation services are designed to
              provide users with easy access to medical advice and routine
              checkups
            </p>
          </div>

          <div className="service-item bg-white p-[30px] rounded-[10px] shadow-2xl min-h-[288px] flex flex-col items-center text-center">
            <div className="grid-item-icon mb-[15px]">
              <Image
                src={"/pills.png"}
                alt="medical-icon"
                width={60}
                height={60}
                className=" mb-[5px] w-auto h-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-[10px]">Pregnancy care</h3>
            <p className="description font-light leading-normal max-w-[300px]">
              Carefinder&apos;s Pregnancy care services are designed to assist
              expectant mothers in navigating their pregnancy journey with ease
              and confidence.{" "}
            </p>
          </div>

          <div className="service-item bg-white p-[30px] rounded-[10px] shadow-2xl min-h-[288px] flex flex-col items-center text-center">
            <div className="grid-item-icon mb-[15px]">
              <Image 
                src={"/pregnancy.png"}
                alt="medical-icon"
                width={60}
                height={60}
                className=" mb-[5px] w-auto h-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-[10px]">
              Pharmaceutical care and Nutrition
            </h3>
            <p className="description font-light leading-normal max-w-[300px]">
              Carefinder&apos;s pharmaceutical care services aim to enhance
              medication management and ensure patients receive the best
              possible pharmaceutical support. They also focus on promoting
              healthy eating habits and providing personalized dietary advice.
            </p>
          </div>

          <div className="service-item bg-white p-[30px] rounded-[10px] shadow-2xl min-h-[288px] flex flex-col items-center text-center">
            <div className="grid-item-icon mb-[15px]">
              <Image src={"/icon-4.png"} alt="medical-icon" width={50} height={60} className="w-auto h-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-[10px]">Cardiology</h3>
            <p className="description font-light leading-normal max-w-[300px]">
              Carefinder offers comprehensive cardiology services to support
              patients with heart-related conditions and promote cardiovascular
              health.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
export default Services;
