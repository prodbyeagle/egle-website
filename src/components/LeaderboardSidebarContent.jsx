import React from 'react';
import RoundedXIcon from './RoundedXIcon.jsx';

function LeaderboardSidebarContent({ leaderboardData, onClose }) {
   return (
      <aside className="bg-gray-800 text-gray-200 mt-4 p-5 w-64 rounded-md z-40 fixed md:static md:transform-none transition-transform transform md:translate-x-0 hidden md:block">
         <div className="flex justify-between items-center mb-4">
            <button className="text-gray-300 hover:text-white focus:outline-none md:hidden" onClick={onClose}>
               <RoundedXIcon />
            </button>
         </div>
         <div className="mb-4 text-center">
            <h4 className="text-xl font-bold mb-2">Top #10 Players</h4>
            {leaderboardData && leaderboardData.length > 0 ? (
               <ul>
                  {leaderboardData.slice(0, 10).map((player, index) => (
                     <li key={index} className="mb-2 font-medium">
                        {player.username}: {player.xp} XP
                     </li>
                  ))}
               </ul>
            ) : (
               <p className="text-gray-400 italic">No data available.</p>
            )}
         </div>
      </aside>
   );
}

export default LeaderboardSidebarContent;
