import React from "react";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { Tooltip } from "@material-tailwind/react";

function Header() {
  return (
    <header className="mb-10 fixed inset-x-0 top-6 z-30 mx-auto w-full max-w-screen-md border border-gray-200 bg-white/90 py-3 shadow-lg backdrop-blur-md md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <a
              aria-current="page"
              className="flex items-center bg-blue-500 text-white shadow-lg rounded-full px-4 py-1"
              href="/"
            >
              <b className="text-xl font-bold">
                NA<span className="text-yellow-300">HOM</span>
              </b>
              <p className="sr-only">Website Title</p>
            </a>
          </div>

          <div className="flex items-center justify-end gap-4">
            <Tooltip
              content="GitHub Profile"
              placement="bottom"
              className="z-40"
            >
              <a
                href="https://github.com/Nahom4748"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900"
              >
                <FaGithub size={24} />
              </a>
            </Tooltip>
            <Tooltip
              content="LinkedIn Profile"
              placement="bottom"
              className="z-40"
            >
              <a
                href="https://www.linkedin.com/in/nahom-hambissa-07a072150/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <FaLinkedin size={24} />
              </a>
            </Tooltip>
            <Tooltip
              content="Download Resume"
              placement="bottom"
              className="z-40"
            >
              <a
                href="/path-to-your-resume.pdf"
                download
                className="text-gray-700 hover:text-gray-900"
              >
                <FaDownload size={24} />
              </a>
            </Tooltip>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
