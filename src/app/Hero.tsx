import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      {/* left section */}
      <main className=" flex gap-5 ">
        <div className=" relative z-0 w-full lg:h-[700px] overflow-hidden bg-opacity-75 bg-[url('/bg_house.png')] bg-cover ">
          <div className=" absolute inset-0 -z-50 h-full w-full bg-zinc-100 bg-opacity-80">
            <div className=" z-50 m-auto mt-1 block w-[95%] items-center  justify-between md:flex md:flex-row lg:w-[90%] xl:w-[1300px]">
              {/* left section */}
              <div className=" my-28 h-fit w-full  md:w-1/2 md:py-10 lg:py-0">
                <h1
                  className="text-[#044e83] whitespace-nowrap text-center text-[2rem] font-extrabold leading-10 
          tracking-wider text-main sm:text-5xl sm:leading-none md:text-left lg:text-6xl "
                >
                  Governor Sindh
                </h1>
                <h3
                  className="text-[#044e83] whitespace-nowrap text-center text-[1.5rem] font-normal leading-[2rem] tracking-wider 
      text-main sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem]"
                >
                  Kamran Khan Tessori
                </h3>
                <br />
                <h1
                  className="text-[#2eb6e8] whitespace-nowrap text-center text-[1.5rem] 
            font-extrabold leading-[2rem] tracking-wider  
            text-sub sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem]"
                >
                  Certified Cloud
                  <br />
                  Applied Generative AI
                  <br />
                  Engineer (GenEng)
                </h1>
                <h3
                  className="text-[#044e83] my-5 whitespace-nowrap text-center text-[1.25rem] 
          font-extrabold text-main sm:text-2xl md:text-left"
                >
                  Earn up to $5,000 / month
                </h3>

                <h3
                  className=" text-[#044e83] w-full text-center text-[1.25rem] font-extrabold
           tracking-wider text-main sm:text-2xl md:w-[80%] md:text-left"
                >
                  Now admissions are open in Hyderabad
                </h3>

                {/* apply button */}

                <div className="mb-7 mt-5 flex flex-col items-center sm:mt-10 sm:flex-row sm:gap-5 md:mb-0">
                  <a href="/apply" className="w-full md:w-auto">
                    <button
                      className=" bg-[#044e83] w-full rounded-md bg-main py-3 text-center text-sm 
              font-semibold tracking-widest text-white transition-all hover:translate-y-1 sm:py-4 sm:text-base md:w-52"
                    >
                      Apply Now
                    </button>
                  </a>
                  {/* Students Applications */}
                  {/* main div */}
                  <div className="flex w-full flex-col mt-4 items-center sm:mt-0">
                    <div className="flex-col items-center tracking-widest text-xl sm:text-3xl ">
                      <div className="w-40 font-extrabold text-[#044e83]">
                        562,143
                      </div>
                    </div>
                    {/* Accepted Applications */}
                    <div className="text-center text-xs tracking-widest sm:mb-0 sm:text-sm text-[#044e83]">
                      Accepted Applications
                    </div>
                  </div>
                </div>
              </div>
              {/* Right section */}
              <div className=" flex  w-full m-0 justify-center items-end  md:justify-end">
                <Image
                  src="/governorsindh.png"
                  alt="Governor Sindh"
                  height={1212}
                  width={1600}
                  className="ml-40 my-5 h-auto min-w-[900px] lg:w-[1300px] "
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="mt-20 ">
        <h1 className="text-[#044e83] font-extrabold text-3xl text-center">
          Certified Cloud Applied Generative AI Engineer (GenEng) and
          Solopreneur
        </h1>
        <h1 className=" text-[#044e83] font-extrabold text-3xl text-center">
          {" "}
          Developing Billion-Dollar Valued Developers and Solopreneurs{" "}
        </h1>
      </div>
      <div>
        <p className="text-zinc-800 sm:tracking-wider tracking-normal text-justify text-[1rem] sm:text-[1.2rem] xl:text-[1.25rem] mt-7 mb-8 mr-5 ml-5">
          The pace of technological change is accelerating, big players like
          Microsoft, Amazon, Google, and OpenAI are winning by providing
          infrastructure, large AI foundation models, frameworks, 3D Metaverse
          experiences, and massive distribution networks. Solopreneurs trained
          in this program will win by automating work typically outsourced to
          employees, by directly connecting to customers by eliminating the
          middleman, and by developing vertical metaverses, thus paving the way
          for the first billion-dollar valued solopreneur businesses. This
          program has the objective to train this new breed of billion-dollar
          solopreneurs. These solopreneurs will adopt the ultra-lean business
          model and work independently and will not need to hire employees or
          other team members.
        </p>
      </div>
      <div className=" grid sm:grid-cols-3 grid-cols-1 mt-10 gap-5 mr-4 ml-4">
        <Image
          src="/pic1.jpg"
          alt="pic1"
          width={1088}
          height={896}
          className="rounded-lg shadow-2xl shadow-black h-[300px] w-full "
        ></Image>
        <Image
          src="/pic2.jpg"
          alt="pic2"
          width={500}
          height={375}
          className="rounded-lg shadow-2xl shadow-black h-[300px] w-full "
        ></Image>
        <Image
          src="/pic3.jpg"
          alt="pic2"
          width={500}
          height={375}
          className="rounded-lg shadow-2xl shadow-black h-[300px] w-full"
        ></Image>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 mt-10 gap-5 mr-4 ml-4">
        <Image
          src="/img1.jpg"
          alt="slideshow1"
          width={1080}
          height={608}
          className="rounded-lg w-full h-[300px] md:h-[600px]"
        ></Image>
        <Image
          src="/img2.jpg"
          alt="slideshow2"
          width={1156}
          height={521}
          className="rounded-lg w-full  h-[300px] md:h-[500px]"
        ></Image>
        <Image
          src="/img3.jpg"
          alt="slideshow3"
          width={960}
          height={906}
          className="rounded-lg w-full h-[300px] md:h-[600px]"
        ></Image>
        <Image
          src="/img4.jpg"
          alt="slideshow4"
          width={1600}
          height={900}
          className="rounded-lg w-full  h-[300px] md:h-[600px]"
        ></Image>
        <Image
          src="/img5.jpg"
          alt="slideshow5"
          width={1600}
          height={1068}
          className="rounded-lg w-full  h-[300px] md:h-[700px]"
        ></Image>
        <Image
          src="/img6.jpg"
          alt="slideshow6"
          width={1280}
          height={809}
          className="rounded-lg w-full  h-[300px] md:h-[600px]"
        ></Image>
      </div>
      {/* break diya he */}
      <br />
      {/* Horizontal line di he */}
      <hr className="h-px my-8 m-5 bg-gray-300 border-0 dark:bg-gray-700" />
      {/* core course ki heading ka div */}
      <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-10 mb-10">
        <h1 className="text-[#044e83] lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center font-extrabold">
          Core Courses Sequence
        </h1>
      </div>
      {/* main div jis mai all courses ayenge*/}
      <div className="grid  sm:grid-cols-3  grid-cols-1 xl-lg:gap-10 gap-10 mt-10 m-6 mb-20 lg:w-[950px] ">
        {/* image 1 ka main div hy */}
        <div className="overflow-hidden h-fit box_shadow shadow-xl rounded-lg justify-center  items-center text-center text-zinc-600 text-lg font-bold hover:scale-105 duration-200 transition-all ">
          <div>
            <Image
              src="/pf1.jpg"
              alt="programming fundamentals"
              width={450}
              height={300}
              className="w-full"
            ></Image>
          </div>
          <div className="px-4 flex justify-center items-center h-[70px] rounded-lg">
            <text>Programming Fundamentals</text>
          </div>
        </div>
        {/* idhr upr line pe image1 ka div end howa he */}
        {/* image2 ka div start  */}
        <div className=" overflow-hidden h-fit  box_shadow shadow-xl rounded-lg  justify-center items-center text-center text-zinc-600 text-lg font-bold hover:scale-105 duration-200 transition-all">
          <div>
            <Image
              src="/wu2.jpg"
              alt="web2 using Nextjs"
              width={450}
              height={300}
              className="w-full"
            ></Image>
          </div>
          <div className="px-4 flex justify-center items-center h-[70px]">
            <text>Web2 using Nextjs</text>
          </div>
        </div>
        {/* image2 ka div end */}
        {/* image 3 ka div start */}
        <div className=" overflow-hidden h-fit box_shadow shadow-xl rounded-lg  justify-center items-center text-center text-zinc-600 text-lg font-bold hover:scale-105 duration-200 transition-all">
          <div>
            <Image
              src="/eayl3.jpg"
              alt="Earn as you learn"
              width={450}
              height={300}
              className="w-full"
            ></Image>
          </div>
          <div className="px-4 flex justify-center items-center h-[70px]">
            <text>Earn as you Learn</text>
          </div>
        </div>
        {/* image 3 ka div end */}
      </div>
      {/* ye upr images ka main div hy */}
      {/* Advanced cource ki heading ka div */}
      <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-10 mb-10">
        <h1 className="text-[#044e83] lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center font-extrabold">
          Advanced Courses
        </h1>
      </div>
      {/* Advanced courses ka main div */}
      <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:w-[1300px] gap-5 lg:gap-10 lg:w-[90%] w-[95%] m-auto mt-10 mb-10">
        {/* image 1 ka div */}
        <div className="overflow-hidden rounded-lg box_shadow shadow-xl flex flex-col justify-center item-center hover:scale-105 duration-200 transition-all h-fit font-bold text-lg text-zinc-600 ">
          <div>
            <Image
              src="/AI.jpg"
              alt="Artificial Intelligence"
              height={300}
              width={450}
              className="w-full"
            ></Image>
          </div>
          <div className="px-4 flex justify-center items-center h-[70px]">
            <text>Artificial Intelligence</text>
          </div>
        </div>
        {/* 2nd image ka div */}
        <div className="overflow-hidden rounded-lg box_shadow shadow-xl flex flex-col justify-center item-center hover:scale-105 duration-200 transition-all h-fit font-bold text-lg text-zinc-600">
          <div>
            <Image
              src="/metaverse.jpg"
              alt="Web 3 and metaverse"
              height={300}
              width={450}
              className="w-full"
            ></Image>
          </div>
          <div className="px-4 flex justify-center items-center h-[70px]">
            <text>Web 3 and metaverse</text>
          </div>
        </div>
        {/* 3rd image ka div */}
        <div className="overflow-hidden rounded-lg box_shadow shadow-xl flex flex-col justify-center item-center hover:scale-105 duration-200 transition-all h-fit font-bold text-lg text-zinc-600">
          <div>
            <Image
              src="/cloudComputing.jpg"
              alt="Cloud Computing"
              height={300}
              width={450}
              className="w-full"
            ></Image>
          </div>
          <div className="px-4 flex justify-center items-center h-[70px]">
            <text>Cloud Computing</text>
          </div>
        </div>
        {/* 4 image ka div */}
        <div className="overflow-hidden rounded-lg box_shadow shadow-xl flex flex-col justify-center item-center hover:scale-105 duration-200 transition-all h-fit font-bold text-lg text-zinc-600">
          <div>
            <Image
              src="/iot.jpg"
              alt="Ambient Computing and IoT"
              height={300}
              width={450}
              className="w-full"
            ></Image>
          </div>
          <div className="px-4 flex justify-center items-center h-[70px]">
            <text>Ambient Computing and IoT</text>
          </div>
        </div>
        {/* 5th image ka div */}
        <div className="overflow-hidden rounded-lg box_shadow shadow-xl flex flex-col justify-center item-center hover:scale-105 duration-200 transition-all h-fit font-bold text-lg text-zinc-600">
          <div>
            <Image
              src="/genomics.jpg"
              alt="Cloud Computing"
              height={300}
              width={450}
              className="w-full"
            ></Image>
          </div>
          <div className="px-4 flex justify-center items-center h-[70px]">
            <text>Genomics and Bioinformatics</text>
          </div>
        </div>
        {/* 6th image ka div */}
        <div className="overflow-hidden rounded-lg box_shadow shadow-xl flex flex-col justify-center item-center hover:scale-105 duration-200 transition-all h-fit font-bold text-lg text-zinc-600">
          <div>
            <Image
              src="/automation.jpg"
              alt="Network Programmability and Automation"
              height={300}
              width={450}
              className="w-full"
            ></Image>
          </div>
          <div className="px-4 flex justify-center items-center h-[70px]">
            <text>Network Programmability and Automation</text>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
