import React, { useState } from 'react';
import Modal from './Modal';

const Application = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const openModal = () => {
      setIsModalOpen(true);
   };

   const closeModal = () => {
      setIsModalOpen(false);
   };

   return (
      <div className="p-5 m-3 bg-gray-800 rounded-md">
         <h1 className="mb-4 text-4xl font-bold text-white">Bewerbung</h1>
         <p className="text-lg text-gray-300">
            Bewirb dich hier, um unserem Clan beizutreten!
         </p>
         <button
            className="px-4 py-2 mt-4 text-gray-100 transition duration-200 ease-in-out transform bg-gray-600 rounded-md hover:bg-gray-500 hover:scale-105"
            onClick={openModal}
         >
            Apply Now
         </button>

         <Modal isOpen={isModalOpen} onClose={closeModal} title="Application Form">
            <form className="space-y-4">
               <div>
                  <label className="block text-gray-300">What is your IGN (Roblox Username)?</label>
                  <input type="text" className="w-full p-2 text-gray-100 bg-gray-700 rounded-md" />
               </div>
               <div>
                  <label className="block text-gray-300">How many Huges do you have?</label>
                  <input type="text" className="w-full p-2 text-gray-100 bg-gray-700 rounded-md" />
               </div>
               <div>
                  <label className="block text-gray-300">How many Exclusives do you have?</label>
                  <input type="text" className="w-full p-2 text-gray-100 bg-gray-700 rounded-md" />
               </div>
               <div>
                  <label className="block text-gray-300">What Rank are you?</label>
                  <input type="text" className="w-full p-2 text-gray-100 bg-gray-700 rounded-md" />
               </div>
               <div>
                  <label className="block text-gray-300">Which Gamepasses do you own?</label>
                  <textarea className="w-full p-2 text-gray-100 bg-gray-700 rounded-md"></textarea>
               </div>
               <button
                  type="submit"
                  className="px-4 py-2 mt-4 text-gray-100 transition duration-200 ease-in-out transform bg-gray-600 rounded-md hover:bg-gray-500 hover:scale-105"
               >
                  Submit
               </button>
            </form>
         </Modal>
      </div>
   );
};

export default Application;