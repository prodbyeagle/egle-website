import React from 'react';

const NotFound = () => {
   return (
      <div className="p-4 mt-4 bg-gray-800 rounded-md md:ml-4 text-center">
         <h1 className="mb-4 text-4xl font-bold text-white">Not Found!</h1>
         <p className="text-lg text-gray-300 italic">
            I'm sorry but your search isn't working!
         </p>
         <a
            href="/"
            className="px-4 py-2 mt-4 text-gray-100 transition duration-100 ease-in-out transform bg-gray-600 rounded-md hover:bg-gray-500 hover:scale-105 inline-block"
         >
            Go Back Home
         </a>
      </div>
   );
};

export default NotFound;
