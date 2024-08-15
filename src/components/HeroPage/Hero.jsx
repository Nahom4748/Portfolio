import React from "react";
import { TypeAnimation } from "react-type-animation";
import myImage from "../../images/photo_2024-08-13_15-07-20-removebg-preview.png";
import AnimatedPage from "../AnimatedPage/AnimatedPage";

function Hero() {
  return (
    <AnimatedPage direction="left">
      {" "}
      {/* You can change direction to "right" as needed */}
      <section className="h-screen bg-gradient-to-r from-slate-900 to-slate-700 2xl:py-24 2xl:bg-bgblue sm:pt-16 md:pt-2">
        <div className="px-4 mx-auto py-8 rounded-md bg-from-pink-500 hover:to-orange-500 max-w-7xl sm:px-6 lg:px-8">
          <div className="2xl:pl-24">
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 2xl:gap-x-20">
              <div className="text-center md:py-16 xl:py-24 md:text-left">
                <h4 className="text-lg font-semibold text-white xl:text-2xl">
                  Hey There
                </h4>
                <h1 className="xl:text-6xl sm:text-6xl text-white xs:text-3xl font-semibold font-serif mt-2">
                  I'm
                  <span className="text-barkred text-pink text-yellow-500">
                    {" "}
                    Nahom
                  </span>
                </h1>
                <h1 className="sm:text-4xl xs:text-2xl text-white font-semibold font-serif">
                  Hambissa
                </h1>
                <h4 className="text-yellow-400 mt-4 lg:text-2xl text-lightblue">
                  <TypeAnimation
                    sequence={[
                      "FullStack Developer React.js",
                      1000,
                      "FullStack Developer Node.js",
                      1000,
                      "FullStack Developer MangoDB",
                      1000,
                      "FullStack Developer Tailwind",
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: "1em", display: "inline-block" }}
                    repeat={Infinity}
                  />
                </h4>
                <p className="lg:w-[100%] xs:w-full text-white text-sm mt-4 xl:text-xl">
                  Full-stack web developer passionate about crafting efficient
                  and user-friendly web solutions. From front-end design to
                  back-end functionality, I deliver high-quality code that meets
                  business goals and enhances user experiences.
                </p>
              </div>

              <div className="relative">
                <img
                  className="rounded-full border-white border-2 md:absolute md:bottom-0 md:scale-110 md:origin-bottom-right lg:scale-75 2xl:scale-100 2xl:-mt-20"
                  src={myImage}
                  alt="Nahom"
                />
              </div>
            </div>
            {/* <Icons /> */}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}

export default Hero;
