import React from 'react';

function Modal({ isOpen, onClose, title, children }) {
   if (!isOpen) return null;

   return (
      <div className="fixed inset-0 z-50 flex overflow-auto m-3 bg-black rounded-lg bg-opacity-50" onClick={onClose}>
         <div className="relative p-6 m-64 bg-gray-800 rounded-lg">
            <div className="flex items-center justify-between mb-4">
               <h3 className="text-2xl font-bold text-gray-200">{title}</h3>
               <button
                  onClick={onClose}
                  className="text-gray-200 hover:text-gray-200 focus:outline-none"
                  title='Close'
               >
                  <svg
                     className="w-6 h-6"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                     />
                  </svg>
               </button>
            </div>
            <div>{children}</div>
         </div>
      </div>
   );
}

export default Modal;