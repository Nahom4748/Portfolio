import React, { useState, useEffect } from "react";
import worksData from "./worksData";
import "./worksstyle.css"; // Ensure this file contains the necessary styles

function MyWorks() {
  const [hoveredWork, setHoveredWork] = useState(null);

  // Animation classes
  const [animationClassTitle, setAnimationClassTitle] = useState("");
  const [animationClassList, setAnimationClassList] = useState("");

  useEffect(() => {
    setAnimationClassTitle("animate-in-title");
    setAnimationClassList("animate-in-list");
  }, []);

  const handleWorkClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section
      className={`works-section h-screen bg-gradient-to-r from-slate-900 to-slate-700 sm:pt-16 md:pt-2 overflow-hidden transition-colors duration-300`}
    >
      <div className="px-4 mx-auto pt-20 pb-10 rounded-md bg-bgblue max-w-7xl sm:px-6 lg:px-8">
        <div className="2xl:pl-24">
          <div className="text-center md:py-16 xl:py-24 md:text-left">
            <h4
              className={`text-lg font-semibold text-yellow-300 xl:text-4xl ${animationClassTitle}`}
            >
              Showcasing My Works
            </h4>
            <p className="lg:w-[100%] xs:w-full text-white text-sm mt-4 xl:text-xl animate-fadeIn">
              Here are some of the projects I've worked on. Hover over a project
              to see more details.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <div
              className={`flex flex-wrap gap-4 justify-center ${animationClassList}`}
            >
              {worksData.map((work) => (
                <div
                  key={work.title}
                  className="relative flex-none w-64 h-64 p-4 bg-gray-700 rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:bg-gray-600
                    sm:w-56 sm:h-56 md:w-48 md:h-48 lg:w-40 lg:h-40 xl:w-64 xl:h-64"
                  onMouseEnter={() => setHoveredWork(work)}
                  onMouseLeave={() => setHoveredWork(null)}
                  onClick={() => handleWorkClick(work.links)}
                >
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-36 object-cover mb-2 rounded-lg
                      sm:h-32 md:h-28 lg:h-24 xl:h-36"
                  />
                  <h5
                    className="text-lg font-medium text-yellow-400
                    sm:text-base md:text-sm lg:text-xs xl:text-lg"
                  >
                    {work.title}
                  </h5>
                  <p
                    className="text-sm text-white
                    sm:text-xs md:text-[0.75rem] lg:text-[0.65rem] xl:text-sm"
                  >
                    {work.description}
                  </p>

                  {/* Tooltip with Work Details */}
                  {hoveredWork === work && (
                    <div className="absolute bottom-full mb-2 left-0 right-0 p-2 bg-gray-900 bg-opacity-75 text-white rounded-lg text-center tooltip">
                      <p className="text-base">{work.details}</p>
                      <a
                        href={work.links}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 block px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
                      >
                        View More
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyWorks;
