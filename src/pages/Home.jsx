import React, { useState } from 'react';
import Modal from '../components/Modal';

function Home() {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const openModal = () => {
      setIsModalOpen(true);
   };

   const closeModal = () => {
      setIsModalOpen(false);
   };

   return (
      <div className="p-4 m-3 bg-gray-800 rounded-md">
         <h2 className="mb-4 text-2xl font-bold text-gray-200">Home</h2>

         <section className="p-8 mb-6 text-gray-100 bg-gray-700 rounded-md">
            <h3 className="mb-2 text-3xl font-bold">🦅 EGLE 🦅</h3>
            <p className="text-lg">The EGLE Clan is a dedicated and friendly community of Pet Sim 99 players.</p>
            <p className="text-lg"> Our goal is to create a supportive environment where all members can play, learn, and have fun together.</p>
         </section>

         <section className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-2 md:grid-cols-3">

            <div className="p-4 transition duration-200 ease-in-out transform bg-gray-800 border-2 border-gray-700 rounded-md hover:scale-95 hover:shadow-lg">
               <h3 className="text-lg font-semibold text-gray-100">Team Play</h3>
            </div>

            <div className="p-4 transition duration-200 ease-in-out transform bg-gray-800 border-2 border-gray-700 rounded-md hover:scale-95 hover:shadow-lg">
               <h3 className="text-lg font-semibold text-gray-100">Knowledge Sharing</h3>
            </div>

            <div className="p-4 transition duration-200 ease-in-out transform bg-gray-800 border-2 border-gray-700 rounded-md hover:scale-95 hover:shadow-lg">
               <h3 className="text-lg font-semibold text-gray-100">Competitions</h3>
            </div>
         </section>

         <section className="mb-8 bg-gray-800 rounded-md">
            <h3 className="mb-4 text-2xl font-bold text-gray-100">Rules</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

               <div className="p-4 transition duration-200 ease-in-out transform bg-gray-700 border-2 border-gray-600 rounded-md hover:scale-95 hover:shadow-lg">
                  <h4 className="mb-2 text-lg font-semibold text-gray-100">Respect</h4>
                  <p className="text-gray-300">Treat all members with respect and courtesy.</p>
               </div>

               <div className="p-4 transition duration-200 ease-in-out transform bg-gray-700 border-2 border-gray-600 rounded-md hover:scale-95 hover:shadow-lg">
                  <h4 className="mb-2 text-lg font-semibold text-gray-100">No Spam</h4>
                  <p className="text-gray-300">Avoid spamming and keep chat clean and relevant.</p>
               </div>

               <div className="p-4 transition duration-200 ease-in-out transform bg-gray-700 border-2 border-gray-600 rounded-md hover:scale-95 hover:shadow-lg">
                  <h4 className="mb-2 text-lg font-semibold text-gray-100">Fair Play</h4>
                  <p className="text-gray-300">Cheating and the use of unauthorized software are strictly prohibited..</p>
               </div>

               <div className="p-4 transition duration-200 ease-in-out transform bg-gray-700 border-2 border-gray-600 rounded-md hover:scale-95 hover:shadow-lg">
                  <h4 className="mb-2 text-lg font-semibold text-gray-100">Conflict Resolution</h4>
                  <p className="text-gray-300">Resolve conflicts through calm and reasonable discussions. Contact a moderator if necessary.</p>
               </div>
            </div>
         </section>

         <section className="p-5 bg-gray-700 rounded-md">
            <h3 className="mb-4 text-2xl font-bold text-gray-100">Requirements</h3>
            <p className="text-lg text-gray-300">To join our vibrant Pet Sim 99 Clan, members must meet the following criteria.</p>
            <button
               onClick={openModal}
               className="px-4 py-2 mt-4 text-gray-100 transition duration-200 ease-in-out transform bg-gray-600 rounded-md hover:bg-gray-500 hover:scale-105"
            >
               View Requirements
            </button>
         </section>

         <Modal isOpen={isModalOpen} onClose={closeModal} title="Requirements for Joining EGLE Clan">
            <p className="text-lg text-gray-200">
               To join our vibrant Discord community, members must meet the following criteria:
            </p>
            <ul className="mt-4 ml-4 text-gray-200">
               <li>
                  ・Minimum of 5 Huges
               </li>
               <li>
                  ・Minimum Rank 17
               </li>
               <li>
                  ・<del>Minimum Donation of 600,000 Diamonds per Week</del>
               </li>
               <li>
                  ・Active Participation in Clan Battles
               </li>
            </ul>
            <p className="mt-4 text-xs italic text-gray-200">
               Please note that these requirements are subject to change based on the evolving needs of our community.
               Any updates will be communicated promptly to all members.
            </p>
         </Modal>
      </div>
   );
}

export default Home;