import React from 'react';

function Home() {
   return (
      <div className="bg-gray-800 rounded-md m-3 p-4">
         <h2 className="text-2xl font-bold mb-4">Home</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-800 rounded-md border-2 border-gray-700 p-4 transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg">
               <h3 className="text-lg font-semibold mb-2 text-gray-100">Tile 1</h3>
               <p className="text-gray-300">Content for Tile 1...</p>
            </div>
            <div className="bg-gray-800 rounded-md border-2 border-gray-700 p-4 transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg">
               <h3 className="text-lg font-semibold mb-2 text-gray-100">Tile 2</h3>
               <p className="text-gray-300">Content for Tile 2...</p>
            </div>
            <div className="bg-gray-8000 rounded-md border-2 border-gray-700 p-4 transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg">
               <h3 className="text-lg font-semibold mb-2 text-gray-100">Tile 3</h3>
               <p className="text-gray-300">Content for Tile 3...</p>
            </div>
            {/* Add more tiles as needed */}
         </div>
      </div>
   );
}

export default Home;