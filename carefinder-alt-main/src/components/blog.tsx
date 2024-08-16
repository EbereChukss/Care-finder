import React from "react";
import Newsletter from "@/components/newsletter";
import Image from "next/image";

function Blog(): React.JSX.Element {
  return (
    <section className="className mt-28" id="blog">
      <div className="container mx-auto">
        <h2 className="text-3xl mb-[50px] text-bice-blue text-center xl:text-left font-semibold">
          Our Recent Posts
        </h2>
        {/*Blog posts */}
        <div className="flex flex-col xl:flex-row gap-y-6 xl:gap-y-0 items-center xl:justify-between mb-[50px]">
          {/*blog post 1 */}
          <div className="max-w-[420px] shadow-2xl rounded-[10px] overflow-hidden cursor-pointer group">
            {/*image*/}
            <div className="relative overflow-hidden">
              <Image
                className="group-hover:scale-110 transition-all duration-500"
                width={420}
                height={280}
                src={"/gloves.jpg"}
                alt="Glove pic"
              />
              {/*badge*/}
              <div className="text-base bg-bice-blue absolute bottom-0 left-0 text-white tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
                Medical
              </div>
            </div>
            {/*text*/}
            <div className="px-5 py-6">
              {/*date*/}
              <div className="mb-4">Jan 2, 2024</div>
              {/*title*/}
              <h4 className="text-xl font-semibold mb-[10px]">
                The importance of gloves in the medical field.
              </h4>
              {/*description*/}
              <p className="font-light">
                In the medical field, gloves play a crucial role in maintaining
                hygiene and preventing the spread of infections. They provide a
                barrier between healthcare workers and patients, reducing the
                risk of transmitting pathogens through direct contact...
                {/*link*/}
                <a href="" className="italic underline text-gray-400">
                  Read more
                </a>
              </p>
            </div>
          </div>
          {/*Blog post 2 */}

          <div className="max-w-[420px] shadow-2xl rounded-[10px] overflow-hidden cursor-pointer group">
            {/*image*/}
            <div className="relative overflow-hidden">
              <Image
                className="group-hover:scale-110 transition-all duration-500"
                width={420}
                height={280}
                src={"/vaccination.jpg"}
                alt="Glove pic"
              />
              {/*badge*/}
              <div className="text-base bg-bice-blue absolute bottom-0 left-0 text-white tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
                Medical
              </div>
            </div>
            {/*text*/}
            <div className="px-5 py-6">
              {/*date*/}
              <div className="mb-4">Jan 2, 2024</div>
              {/*title*/}
              <h4 className="text-xl font-semibold mb-[10px]">
                The Role Of Vaccinations In Children And Adults.
              </h4>
              {/*description*/}
              <p className="font-light">
                Vaccinations play a vital role in protecting both children and
                adults from various infectious diseases. For children,
                vaccinations help build immunity early in life, preventing
                diseases such as measles, mumps, polio, and whooping cough...
                {/*link*/}
                <a href="" className="italic underline text-gray-400">
                  Read more
                </a>
              </p>
            </div>
          </div>

          {/*Blog post 3 */}

          <div className="max-w-[420px] shadow-2xl rounded-[10px] overflow-hidden cursor-pointer group">
            {/*image*/}
            <div className="relative overflow-hidden">
              <Image
                className="group-hover:scale-110 transition-all duration-500"
                width={420}
                height={280}
                src={"/heart.jpg"}
                alt="Glove pic"
              />
              {/*badge*/}
              <div className="text-base bg-bice-blue absolute bottom-0 left-0 text-white tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
                Medical
              </div>
            </div>
            {/*text*/}
            <div className="px-5 py-6">
              {/*date*/}
              <div className="mb-4">Apr 14, 2024</div>
              {/*title*/}
              <h4 className="text-xl font-semibold mb-[10px]">
                Heart health: 10 Foods To Avoid For Your Heart.
              </h4>
              {/*description*/}
              <p className="font-light">
                It is normal to feel anxiety, worry and grief anytime you are
                diagnosed with a condition, everyone feels this way. Inorder to
                reduce the level of fear that you feel there are certain
                measures you can take and foods to avoid to prevent the early
                onset of heart issues, that&apos;s certainly true...
                {/*link*/}
                <a href="" className="italic underline text-gray-400">
                  Read more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
    </section>
  );
}

export default Blog;
