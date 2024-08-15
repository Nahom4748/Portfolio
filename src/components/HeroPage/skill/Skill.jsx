import React, { useState, useEffect } from "react";
import AnimatedPage from "../../AnimatedPage/AnimatedPage";
import aboutData from "../../Data/aboutData";
import "./skillstyle.css";

function Skill() {
  const [selectedSection, setSelectedSection] = useState(
    aboutData[0]?.title || ""
  );

  useEffect(() => {
    setSelectedSection(aboutData[0]?.title || "");
  }, []);

  return (
    <AnimatedPage>
      <section className="h-screen  bg-gradient-to-r from-slate-900 to-slate-700 pt-36">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-yellow-300 xl:text-3xl">
                Building seamless, user-friendly, and scalable web applications.
              </h4>
              <p className="text-white text-sm mt-4 xl:text-lg">
                I'm a passionate Full Stack Developer with expertise in
                front-end and back-end technologies. With experience in key
                technologies, e.g., React, Node.js, MongoDB, and Tailwind CSS, I
                create efficient and scalable web applications. Whether working
                on a complex backend system or crafting intuitive user
                interfaces, I thrive on delivering high-quality, maintainable
                code.
              </p>
            </div>

            <div className="relative text-white">
              {/* Section Navigation */}
              <div className="flex items-center justify-center gap-4 overflow-x-auto p-2 bg-gray-800 rounded-lg">
                {aboutData.map((section) => (
                  <div
                    key={section.title}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transition-transform transform ${
                      selectedSection === section.title
                        ? "bg-yellow-600 text-white"
                        : "bg-gray-700 text-lightblue hover:bg-yellow-600 hover:text-white"
                    }`}
                    onClick={() => setSelectedSection(section.title)}
                  >
                    {section.icon && (
                      <img
                        src={section.icon}
                        alt={`${section.title} icon`}
                        className="w-6 h-6"
                      />
                    )}
                    <span className="font-medium">{section.title}</span>
                  </div>
                ))}
              </div>

              {/* Section Content */}
              <div className="mt-8 w-full text-white">
                {aboutData.map((section) =>
                  selectedSection === section.title ? (
                    <div key={section.title} className="text-center">
                      {section.title === "skills" ? (
                        <ul className="flex flex-wrap justify-center gap-6 list-none p-0 m-0">
                          {section.info.map((infoItem, index) => (
                            <li
                              key={index}
                              className="flex items-center space-x-3 bg-gray-800 p-4 rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105 hover:bg-gray-700"
                            >
                              <img
                                src={infoItem.icon}
                                alt={`${infoItem.title} icon`}
                                className="w-8 h-8"
                              />
                              <span>{infoItem.title}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <ul className="list-none p-0 m-0 space-y-4">
                          {section.info.map((infoItem, index) => (
                            <li
                              key={index}
                              className="bg-gray-800 p-4 rounded-lg shadow-md"
                            >
                              <h5 className="text-lg font-semibold">
                                {infoItem.title}
                              </h5>
                              <p className="text-gray-400">
                                {infoItem.Institution}
                              </p>
                              <p className="text-gray-500">{infoItem.stage}</p>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}

export default Skill;
