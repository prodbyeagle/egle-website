import React from 'react';

const Button = ({ title, className, onClick }) => {
   return (
      <button
         className={`px-4 py-2 mt-4 text-gray-100 transition duration-100 ease-in-out transform bg-gray-600 rounded-md hover:bg-gray-500 hover:scale-105 ${className}`}
         onClick={onClick}
      >
         {title}
      </button>
   );
};

export default Button;