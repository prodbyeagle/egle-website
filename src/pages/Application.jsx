import React, { useState } from 'react';
import Modal from '../components/Modal'; // Stelle sicher, dass du die Modal-Komponente importierst

const Application = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const openModal = () => setIsModalOpen(true);
   const closeModal = () => setIsModalOpen(false);

   return (
      <div className="p-5 m-3 rounded-md bg-gray-800">
         <h1 className="mb-4 text-4xl font-bold text-white">Bewerbung</h1>
         <p className="text-lg text-gray-300">
            Apply for an Clan Invitation!
         </p>
         <button
            onClick={openModal}
            className="px-4 py-2 mt-4 text-gray-100 transition duration-200 ease-in-out transform bg-gray-600 rounded-md hover:bg-gray-500 hover:scale-105"
         >
            Jetzt bewerben
         </button>

         <Modal isOpen={isModalOpen} onClose={closeModal}>
            <form>
               <div className="mb-4">
                  <label className="block mb-2 text-gray-100" htmlFor="ign">
                     What is your IGN (Roblox Username)?
                  </label>
                  <input
                     type="text"
                     id="ign"
                     className="w-full px-3 py-2 text-gray-900 rounded-md"
                  />
               </div>
               <div className="mb-4">
                  <label className="block mb-2 text-gray-100" htmlFor="huges">
                     How many Huges do you have?
                  </label>
                  <input
                     type="text"
                     id="huges"
                     className="w-full px-3 py-2 text-gray-900 rounded-md"
                  />
               </div>
               <div className="mb-4">
                  <label className="block mb-2 text-gray-100" htmlFor="exclusives">
                     How many Exclusives do you have?
                  </label>
                  <input
                     type="text"
                     id="exclusives"
                     className="w-full px-3 py-2 text-gray-900 rounded-md"
                  />
               </div>
               <div className="mb-4">
                  <label className="block mb-2 text-gray-100" htmlFor="rank">
                     What Rank are you?
                  </label>
                  <input
                     type="text"
                     id="rank"
                     className="w-full px-3 py-2 text-gray-900 rounded-md"
                  />
               </div>
               <div className="mb-4">
                  <label className="block mb-2 text-gray-100" htmlFor="gamepasses">
                     Which Gamepasses do you own?
                  </label>
                  <textarea
                     id="gamepasses"
                     className="w-full px-3 py-2 text-gray-900 rounded-md"
                  />
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
