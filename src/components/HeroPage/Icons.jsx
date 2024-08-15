import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@material-tailwind/react";
import Overlay from "./Overlay"; // Ensure this file is correctly referenced
import "./iconstyle.css"; // Add your custom CSS for tooltips here

function Icons() {
  const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(false);
  const [navigateTo, setNavigateTo] = useState("");

  const handleIconClick = (path) => {
    setShowOverlay(true);
    setNavigateTo(path);
  };

  const handleOverlayComplete = () => {
    if (navigateTo) {
      navigate(navigateTo);
      setShowOverlay(false); // Hide overlay
    }
  };

  const icons = [
    {
      id: "home",
      onClick: () => handleIconClick("/"),
      svgPath: "M12 3L3 12H6V21H9V15H15V21H18V12H21L12 3Z",
      tooltip: "Home",
    },
    {
      id: "skill",
      onClick: () => handleIconClick("/skill"),
      svgPath:
        "M12 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0 2c3.31 0 6 2.69 6 6v2H6v-2c0-3.31 2.69-6 6-6z",
      tooltip: "Skills",
    },
    {
      id: "works",
      onClick: () => handleIconClick("/Myworks"),
      svgPath:
        "M19.4 13c.5-1.4.5-2.6 0-4l2.1-2.4c.2-.2.2-.5.1-.8l-2-3.5c-.1-.2-.3-.3-.6-.3h-2.7c-.5 0-.6.3-.8.6l-2.1 2.5c-1.3-.5-2.7-.5-4 0L9.3 2.6c-.2-.3-.3-.6-.8-.6H5.8c-.2 0-.5.1-.6.3l-2 3.5c-.1.2-.1.6.1.8l2.1 2.4c-.5 1.3-.5 2.7 0 4L3.3 15.5c-.2.2-.2.6-.1.8l2 3.5c.1.2.4.4.6.4h2.7c.5 0 .7-.3.8-.6l2.1-2.5c1.3.5 2.7.5 4 0l2.1 2.5c.2.3.3.6.8.6h2.7c.2 0 .5-.1.6-.3l2-3.5c.1-.2.1-.6-.1-.8L19.4 13zM12 15.5c-1.9 0-3.5-1.6-3.5-3.5S10.1 8.5 12 8.5 15.5 10.1 15.5 12 13.9 15.5 12 15.5z",
      tooltip: "My Works",
    },
    {
      id: "Testimonials",
      onClick: () => handleIconClick("/Testimonial"),
      svgPath:
        "M10 2H14C15.1046 2 16 2.89543 16 4V5H20C21.1046 5 22 5.89543 22 7V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V7C2 5.89543 2.89543 5 4 5H8V4C8 2.89543 8.89543 2 10 2ZM10 5H14V4H10V5ZM4 7V19H20V7H4Z",
      tooltip: "Testimonials",
    },
    {
      id: "Contact",
      onClick: () => handleIconClick("/ContactMe"),
      svgPath:
        "M20 4H4C2.895 4 2 4.895 2 6V18C2 19.105 2.895 20 4 20H20C21.105 20 22 19.105 22 18V6C22 4.895 21.105 4 20 4ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z",
      tooltip: "Contact",
    },
  ];

  return (
    <div className="relative">
      {showOverlay && <Overlay onComplete={handleOverlayComplete} />}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 py-4 mx-6 flex flex-col justify-center items-center gap-4 transition duration-700 ease-in-out hover:to-orange-500 rounded-full backdrop-blur-lg z-50">
        {icons.map((icon) => (
          <Tooltip
            key={icon.id}
            content={icon.tooltip}
            placement="left"
            animate={{
              mount: { scale: 1.5, y: 1.5 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <div className="relative group">
              <button
                className="relative w-12 h-12 rounded-full group"
                onClick={() => handleIconClick(icon.onClick)}
              >
                <div className="floater w-full h-full absolute top-0 left-0 bg-blue-500 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-pink rounded-full">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d={icon.svgPath}
                      className="group-hover:fill-yellow-400 fill-white duration-300"
                    />
                  </svg>
                </div>
              </button>
              {/* Tooltip */}
              <div className="absolute right-full mr-2 w-24 bg-black text-white text-sm rounded-lg text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {icon.tooltip}
              </div>
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}

export default Icons;
