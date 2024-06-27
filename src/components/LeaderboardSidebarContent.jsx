import React from 'react';
import RoundedXIcon from './RoundedXIcon.jsx';
import '../css/raritys.css';

function LeaderboardSidebarContent({ leaderboardData, onClose }) {
   return (
      <aside className="bg-gray-800 text-gray-200 mt-4 p-5 w-64 rounded-md z-40 fixed md:static md:transform-none transition-transform transform md:translate-x-0 hidden md:block">
         <div className="flex justify-between items-center mb-4">
            <button className="text-gray-300 hover:text-white focus:outline-none md:hidden" onClick={onClose}>
               <RoundedXIcon />
            </button>
         </div>
         <div className="text-center">
            <h4 className="text-xl font-bold mb-2">Top #10 Chatters</h4>
            {leaderboardData && leaderboardData.length > 0 ? (
               <ul>
                  {leaderboardData.slice(0, 10).map((player, index) => (
                     <li key={index} className={`mb-2 text-sm ${index === 0 ? 'gold-text' : index === 1 ? 'silver-text' : index === 2 ? 'bronze-text' : ''}`}>
                        <span>
                           {player.username}
                        </span>: {player.level} Level & {player.xp} XP
                     </li>
                  ))}
               </ul>
            ) : (
               <p className="text-gray-400 italic">No Users Found!</p>
            )}
         </div>
      </aside>
   );
}

export default LeaderboardSidebarContent;
