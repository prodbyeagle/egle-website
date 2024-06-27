import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faYoutube, faDiscord } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
   return (
      <div className="p-4 mt-4 bg-gray-800 rounded-md md:ml-4">
         <h1 className="text-4xl font-bold mb-4 text-white">Contact</h1>
         <p className="text-lg text-gray-300 mb-4">
            Contact us here!
         </p>
         <div className="flex flex-col space-y-4 mb-6">
            <a href="https://discord.com/2XdVJa9gV8" className="text-blue-400 hover:underline flex items-center">
               <FontAwesomeIcon icon={faDiscord} className="mr-2" />
               Join the EGLE Discord Server.
            </a>
         </div>
         <div className="bg-gray-700 p-4 rounded-md">
            <h2 className="text-2xl font-semibold mb-4 text-white">Owner Links</h2>
            <div className="flex flex-col space-y-4">
               <a href="https://twitter.com/prodbyeagle" className="text-blue-400 hover:underline flex items-center">
                  <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                  Follow @prodbyeagle on X.
               </a>
               <a href="https://instagram.com/prodbyeagle" className="text-blue-400 hover:underline flex items-center">
                  <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                  Follow @prodbyeagle on Instagram.
               </a>
               <a href="https://youtube.com/@prodbyeagle" className="text-blue-400 hover:underline flex items-center">
                  <FontAwesomeIcon icon={faYoutube} className="mr-2" />
                  Subscribe to @prodbyeagle on Youtube.
               </a>
               <a href="https://discord.gg/mvGpdqvVZU" className="text-blue-400 hover:underline flex items-center">
                  <FontAwesomeIcon icon={faDiscord} className="mr-2" />
                  Join the Discord Server! (Chill Lounge).
               </a>
            </div>
         </div>
      </div>
   );
};

export default Contact;