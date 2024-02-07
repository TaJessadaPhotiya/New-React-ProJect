import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const isMediumScreen = useMediaQuery({ minWidth: 1280 });
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsAboutDropdownOpen(false);
  };

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    if (isMediumScreen) {
      closeMenu();
    }
  }, [isMediumScreen]);

  useEffect(() => {
    const handleClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [navbarRef]);

  const handleHamburgerClick = (event) => {
    event.stopPropagation();
    toggleMenu();
  };

  const handleAboutClick = (event) => {
    event.stopPropagation();
    toggleAboutDropdown();
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%    py-4 px-12 drop-shadow-lg rounded-b-lg backdrop-blur-xl">
      <div className="flex items-center justify-between mx-auto w-full ">
        <div
          className="flex text-white text-2xl font-bold relative"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <img
            src="public/icon/mickey.png"
            className="h-8 me-3 "
            alt="mickey Logo"
          />
          TA GI CITY
        </div>
        <span
          className=" flex absolute h-3 w-3 left-[13.5rem] 2xl:left-[13.5rem]"
          data-aos="zoom-in-left"
          data-aos-duration="2000"
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>

        <div className="xl:hidden">
          <button
            id="menu-toggle"
            className="text-white"
            onClick={handleHamburgerClick}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6 animate-bounce" //icon โดดได้
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <ul
          ref={navbarRef}
          className={`xl:flex space-x-8 hidden ${isMediumScreen ? "" : "flex"}`}
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <li>
            <Link to="/" className="text-white relative inline-block group ">
              <span className="absolute h-0.5 bg-gray-300 bottom-0 left-0 w-full transition-transform duration-500 ease-in-out transform scale-x-0 group-hover:scale-x-100"></span>
              Home
            </Link>
          </li>
          <li className="relative group">
            <Link
              to="/about"
              className="text-white relative inline-block group "
              onClick={handleAboutClick}
            >
              <span className="absolute h-0.5 bg-gray-300 bottom-0 left-0 w-full transition-transform duration-500 ease-in-out transform scale-x-0 group-hover:scale-x-100"></span>
              About
            </Link>
            <ArrowDropDownIcon
              className="animate-bounce w-6 h-6"
              style={{ color: "white" }}
            />
            {isAboutDropdownOpen && (
              <ul className="absolute bg-[#0fb594] text-white mt-2 space-y-2 rounded-b-lg backdrop-blur-sm">
                <li>
                  <Link to="/about/epic1" className="block py-2 px-4">
                    Epic1
                  </Link>
                </li>
                <li>
                  <Link to="/about/epic2" className="block py-2 px-4">
                    Epic2
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              to="/services"
              className="text-white relative inline-block group "
            >
              <span className="absolute h-0.5 bg-gray-300 bottom-0 left-0 w-full transition-transform duration-500 ease-in-out transform scale-x-0 group-hover:scale-x-100"></span>
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white relative inline-block group "
            >
              <span className="absolute h-0.5 bg-gray-300 bottom-0 left-0 w-full transition-transform duration-500 ease-in-out transform scale-x-0 group-hover:scale-x-100"></span>
              Contact
            </Link>
          </li>
          {/* <button
            type="button"
            className="bg-gradient-to-r text-gray-100 from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg p-1"
          >
            Hover me
          </button> */}
        </ul>
      </div>

      {isMenuOpen && (
        <ul className="flex flex-col items-center justify-center h-[180px]">
          <li className="py-2">
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
          <li className="relative group block py-2 px-4">
            <Link to="/about" className="text-white" onClick={handleAboutClick}>
              About
            </Link>
          </li>
          {isAboutDropdownOpen && (
            <ul className="absolute bg-[#0facc6] rounded-b-lg drop-shadow-xl text-white mt-[80px] space-y-2">
              <li>
                <Link to="/about/epic1" className="block py-2 px-4">
                  Epic1
                </Link>
              </li>
              <li>
                <Link to="/about/epic2" className="block py-2 px-4">
                  Epic2
                </Link>
              </li>
            </ul>
          )}
          <li className="py-2">
            <Link to="/services" className="text-white">
              Services
            </Link>
          </li>
          <li className="py-2">
            <Link to="/contact" className="text-white">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
