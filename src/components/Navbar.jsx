import React, { useState } from 'react';
import { Link } from "react-router-dom";
import eagleLogoPNG from '../assets/eagle.png';
import eagleLogoGIF from '../assets/eagle.gif';

function Navbar({ toggleSidebar }) {
   const [isOpen, setIsOpen] = useState(false);
   const [isHovered, setIsHovered] = useState(false);

   const toggleDropdown = () => {
      setIsOpen(!isOpen);
   };

   const handleMouseEnter = () => {
      setIsHovered(true);
   };

   const handleMouseLeave = () => {
      setIsHovered(false);
   };

   const closeDropdown = () => {
      setIsOpen(false);
   };

   return (
      <nav className="bg-gray-800 p-4 rounded-md">
         <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="flex items-center text-white text-xl font-bold" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
               <img src={isHovered ? eagleLogoGIF : eagleLogoPNG} alt="EGLE Logo" className="w-8 h-8 mr-2" />
               EGLE
            </Link>

            {/* Dropdown menu for links */}
            <div className="relative md:block hidden">
               <button
                  className="text-white focus:outline-none bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
                  onClick={toggleDropdown}
               >
                  ☰
               </button>
               {isOpen && (
                  <div className="absolute right-0 z-50 mt-2 bg-gray-900 rounded-md shadow-lg py-2 px-4 w-48">
                     <Link to="/" className="block text-white hover:text-gray-300 mb-2" onClick={closeDropdown}>Home</Link>
                     <hr className="border-gray-700 my-2" />
                     <Link to="/application" className="block text-white hover:text-gray-300 mb-2" onClick={closeDropdown}>Application</Link>
                     <hr className="border-gray-700 my-2" />
                     <Link to="/contact" className="block text-white hover:text-gray-300" onClick={closeDropdown}>Contact</Link>
                  </div>
               )}
            </div>

            {/* Hamburger menu for mobile */}
            <div className="md:hidden">
               <button
                  className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
                  onClick={toggleSidebar}
               >
                  ☰
               </button>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;