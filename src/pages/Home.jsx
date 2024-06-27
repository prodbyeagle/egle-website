// Home.jsx

import React from 'react';

function Home() {
   return (
      <div className="p-4 mt-4 bg-gray-800 rounded-md md:ml-4">
         <h2 className="mb-4 text-2xl font-bold text-gray-200">Home</h2>

         <section className="p-8 mb-4 text-gray-100 bg-gray-700 rounded-md">
            <h3 className="mb-2 text-3xl font-bold">🦅 EGLE Clan</h3>
            <p className="text-lg">Welcome to the EGLE Clan, a dedicated and friendly community of Pet Sim 99 players who strive to achieve victory together!</p>
         </section>

         <section className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="p-4 transition duration-300 ease-in-out transform bg-gray-700 border-2 border-gray-700 rounded-md hover:shadow-2xl hover:border-gray-600">
               <h3 className="text-lg font-semibold text-gray-100">Team Play</h3>
            </div>

            <div className="p-4 transition duration-300 ease-in-out transform bg-gray-700 border-2 border-gray-700 rounded-md hover:shadow-2xl hover:border-gray-600">
               <h3 className="text-lg font-semibold text-gray-100">Knowledge Sharing</h3>
            </div>

            <div className="p-4 transition duration-300 ease-in-out transform bg-gray-700 border-2 border-gray-700 rounded-md hover:shadow-2xl hover:border-gray-600">
               <h3 className="text-lg font-semibold text-gray-100">Competitions</h3>
            </div>
         </section>

         <section className="bg-gray-800 mb-4">
            <h3 className="mb-4 text-2xl font-bold text-gray-100">Rules</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

               <div className="p-4 transition duration-300 ease-in-out transform bg-gray-700 border-2 border-gray-700 rounded-md shadow-md hover:shadow-2xl hover:border-gray-600">
                  <h4 className="mb-2 text-lg font-semibold text-gray-100">Requirements</h4>
                  <p className="text-gray-300">Minimum of 5 Huges</p>
               </div>

               <div className="p-4 transition duration-300 ease-in-out transform bg-gray-700 border-2 border-gray-700 rounded-md hover:shadow-2xl hover:border-gray-600">
                  <h4 className="mb-2 text-lg font-semibold text-gray-100">No Spam</h4>
                  <p className="text-gray-300">Avoid spamming and keep chat clean and relevant.</p>
               </div>

               <div className="p-4 transition duration-300 ease-in-out transform bg-gray-700 border-2 border-gray-700 rounded-md hover:shadow-2xl hover:border-gray-600">
                  <h4 className="mb-2 text-lg font-semibold text-gray-100">Fair Play</h4>
                  <p className="text-gray-300">Cheating and the use of unauthorized software are strictly prohibited..</p>
               </div>

               <div className="p-4 transition duration-300 ease-in-out transform bg-gray-700 rounded-md hover:shadow-2xl border-2 border-gray-700 hover:border-gray-600">
                  <h4 className="mb-2 text-lg font-semibold text-gray-100">Conflict Resolution</h4>
                  <p className="text-gray-300">Resolve conflicts through calm and reasonable discussions. Contact a moderator if necessary.</p>
               </div>
            </div>
         </section>

         <section className="bg-gray-800">
            <h3 className="mb-4 text-2xl font-bold text-gray-100">Requirements</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

               <div className="p-4 transition duration-300 ease-in-out transform bg-gray-700 border-2 border-gray-700 rounded-md shadow-md hover:shadow-2xl hover:border-gray-600">
                  <h4 className="text-lg font-semibold text-gray-100">Minimum of 5 Huges</h4>
               </div>

               <div className="p-4 transition duration-300 ease-in-out transform bg-gray-700 border-2 border-gray-700 rounded-md shadow-md hover:shadow-2xl hover:border-gray-600">
                  <h4 className="text-lg font-semibold text-gray-100">Minimum Rank 17</h4>
               </div>

               <div className="p-4 transition duration-300 ease-in-out transform bg-gray-700 border-2 border-gray-700 rounded-md shadow-md hover:shadow-2xl hover:border-gray-600">
                  <h4 className="text-lg font-semibold text-gray-100"><del>Minimum Donation of 600,000 Diamonds per Week</del></h4>
               </div>

               <div className="p-4 transition duration-300 ease-in-out transform bg-gray-700 border-2 border-gray-700 rounded-md shadow-md hover:shadow-2xl hover:border-gray-600">
                  <h4 className="text-lg font-semibold text-gray-100">Active Participation in Clan Battles</h4>
               </div>
            </div>
         </section>
      </div>
   );
}

export default Home;