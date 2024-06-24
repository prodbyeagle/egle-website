import React from 'react';
import { differenceInDays } from 'date-fns';
import '../css/raritys.css';

const RoundedXIcon = () => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
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
);

function Sidebar({ battle, onClose }) {
   const getRarityClassName = (item) => {
      if (item && item.Item && item.Item._data) {
         const { id } = item.Item._data;

         if (id.startsWith('Huge')) {
            if (item.Best === 1) {
               return 'rainbow-text';
            } else if (item.Best === 2) {
               return 'golden-text';
            }
         }
      }
      return '';
   };

   const formatTime = (timestamp) => {
      const finishTime = new Date(timestamp * 1000);
      const daysDifference = differenceInDays(finishTime, new Date());

      if (daysDifference >= 7) {
         return `${Math.ceil(daysDifference / 7)} Weeks left`;
      } else if (daysDifference === 1) {
         return '1 Day left';
      } else if (daysDifference > 0) {
         return `${daysDifference} Days left`;
      } else {
         return 'Expired';
      }
   };

   return (
      <aside className="bg-gray-800 text-gray-200 mt-4 p-5 w-64 rounded-md z-40 fixed md:static md:transform-none transition-transform transform md:translate-x-0">
         <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">{battle && battle.configData?.Title}</h3>
            <button className="text-gray-300 hover:text-white focus:outline-none md:hidden" onClick={onClose}>
               <RoundedXIcon />
            </button>
         </div>
         {battle && battle.configData && (
            <div className="mb-4 text-center">
               <p
                  title={`${new Date(battle.configData.FinishTime * 1000).toLocaleString()}`}
                  className="mb-4 bg-gray-700 rounded-md text-center cursor-help"
               >
                  {formatTime(battle.configData.FinishTime)}
               </p>
               <div>
                  <h4 className="text-lg font-bold mb-2">Placement Rewards</h4>
                  <ul>
                     {battle.configData.PlacementRewards.map((reward, index) => (
                        <li key={index} className="mb-2 font-medium">
                           <span className={getRarityClassName(reward)}>{reward.Item._data.id}:</span> #{reward.Best} - #{reward.Worst}
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         )}
      </aside>
   );
}

export function BattleSidebarContent({ battle, onClose }) {
   return (
      <Sidebar battle={battle} onClose={onClose} />
   );
}

export function LeaderboardSidebarContent({ leaderboardData, onClose }) {
   return (
      <aside className="bg-gray-800 text-gray-200 mt-4 p-5 w-64 rounded-md z-40 fixed md:static md:transform-none transition-transform transform md:translate-x-0">
         <div className="flex justify-between items-center mb-4">
            {/* <h3 className="text-xl font-bold">Leaderboard</h3> */}
            <button className="text-gray-300 hover:text-white focus:outline-none md:hidden" onClick={onClose}>
               <RoundedXIcon />
            </button>
         </div>
         <div className="mb-4 text-center">
            {/* <h4 className="text-lg font-bold mb-2">Top #10 Players</h4> */}
            {leaderboardData && leaderboardData.length > 0 ? (
               <ul>
                  {leaderboardData.map((user, index) => (
                     <li key={index} className="mb-2 font-medium">
                        {user.username}: {user.xp} XP
                     </li>
                  ))}
               </ul>
            ) : (
               <p className="text-gray-400 italic">Coming soon...</p>
            )}
         </div>
      </aside>
   );
}

export default Sidebar;