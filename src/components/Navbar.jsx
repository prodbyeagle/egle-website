import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import eagleLogoPNG from '../assets/eagle.png';
import eagleLogoGIF from '../assets/eagle.gif';
// import { fetchClanBattle } from '../api/fetchClanBattle';

function Navbar() {
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

   // useEffect(() => {
   //    const getBattle = async () => {
   //       try {
   //          const response = await fetchClanBattle();
   //          if (response.data) {
   //             setBattle(response.data); // Assuming response.data contains battle data
   //          }
   //       } catch (error) {
   //          console.error('Error fetching battle data:', error);
   //       }
   //    };

   //    getBattle();
   // }, []);

   return (
      <nav className="bg-gray-800 p-4 rounded-md">
         <div className="container mx-auto flex justify-between items-center">
            {/* EGLE Logo */}
            <Link
               to="/"
               className="flex items-center text-white text-xl font-bold"
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
            >
               <img
                  src={isHovered ? eagleLogoGIF : eagleLogoPNG}
                  alt="EGLE Logo"
                  className="w-8 h-8 mr-2"
               />
               EGLE
            </Link>

            {/* Hamburger menu for mobile */}
            <div className="relative">
               <button
                  className="text-white focus:outline-none bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600"
                  onClick={toggleDropdown}
               >
                  ☰
               </button>
               {isOpen && (
                  <div className="absolute right-0 text-center z-50 mt-2 bg-gray-900 border-2 border-gray-700 rounded-md shadow-lg py-2 px-4 w-48">
                     <Link
                        to="/"
                        className="block mb-1 text-white py-1 border-2 border-gray-900 hover:border-gray-700 rounded-md transition-all duration-100"
                        onClick={closeDropdown}
                     >
                        Home
                     </Link>
                     <Link
                        to="/application"
                        className="block mb-1 text-white py-1 border-2 border-gray-900 hover:border-gray-700 rounded-md transition-all duration-100"
                        onClick={closeDropdown}
                     >
                        Application
                     </Link>
                     <Link
                        to="/contact"
                        className="block text-white py-1 border-2 border-gray-900 hover:border-gray-700 rounded-md transition-all duration-100"
                        onClick={closeDropdown}
                     >
                        Contact
                     </Link>
                  </div>
               )}
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
