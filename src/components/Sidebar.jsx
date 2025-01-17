import React, { useState, useEffect } from 'react';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';
import '../css/raritys.css';
import { extractImageId, buildImageUrl } from '../api/fetchImage';
import { formatNumberWithUnits, timeSince } from '../utils';

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

function Sidebar({ battle, leaderboardData, top5Clans, onClose, sidebarOpen, isMobile }) {
   const [showDetailedTime, setShowDetailedTime] = useState(true);
   const [currentTime, setCurrentTime] = useState(new Date());

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentTime(new Date());
      }, 1000);

      return () => clearInterval(interval);
   }, []);

   const getRarityClassName = (item) => {
      if (item && item.Item && item.Item._data) {
         const { id } = item.Item._data;

         if (id.startsWith('Huge')) {
            if (item.Best === 1) {
               return 'rainbow-text';
            } else if (item.Best === 2) {
               return 'gold-text';
            }
         }
      }
      return '';
   };

   const gettop5RarityClassName = (index) => {
      if (index === 0) {
         return 'rainbow-text'; // #1 Clan bekommt rainbow-text Klasse
      } else if (index === 1 || index === 2) {
         return 'gold-text'; // #2 und #3 Clans bekommen gold-text Klasse
      } else {
         return ''; // Alle anderen Clans bekommen keine spezielle Klasse
      }
   };

   const formatTime = (timestamp) => {
      const finishTime = new Date(timestamp * 1000);
      const now = currentTime;

      if (showDetailedTime) {
         const days = differenceInDays(finishTime, now);
         const hours = differenceInHours(finishTime, now) % 24;
         const minutes = differenceInMinutes(finishTime, now) % 60;
         const seconds = differenceInSeconds(finishTime, now) % 60;

         return `${days}d ${hours}h ${minutes}m ${seconds}s`;
      } else {
         const daysDifference = differenceInDays(finishTime, now);

         if (daysDifference >= 7) {
            const weeks = Math.floor(daysDifference / 7);
            const days = daysDifference % 7;
            return `${weeks} Week and ${days} Day left`;
         } else if (daysDifference === 1) {
            return '1 Day left';
         } else if (daysDifference > 0) {
            return `${daysDifference} Days left`;
         } else {
            return 'Clan Battle Ended!';
         }
      }
   };

   const handleTimeClick = () => {
      setShowDetailedTime(!showDetailedTime);
   };

   return (
      <aside
         className={`bg-gray-800 text-center text-gray-200 p-5 w-60 rounded-md h-fit z-40 fixed inset-y-0 left-0 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } md:relative md:translate-x-0 md:transform-none`}
      >
         <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">{battle && battle.configData?.Title}</h3>
            <button className="text-gray-300 hover:text-white focus:outline-none md:hidden" onClick={onClose}>
               <RoundedXIcon />
            </button>
         </div>
         {battle && battle.configData && (
            <div className="mb-4">
               <p
                  title={`Ends on ${new Date(battle.configData.FinishTime * 1000).toLocaleString()}`}
                  className="mb-4 bg-gray-700 rounded-xl cursor-pointer"
                  onClick={handleTimeClick}
               >
                  {formatTime(battle.configData.FinishTime)}
               </p>
               <div>
                  <ul>
                     {battle.configData.PlacementRewards.map((reward, index) => (
                        <li key={index} className="mb-2 font-medium">
                           <span title={reward.Item._data.id} className={getRarityClassName(reward)}>{reward.Item._data.id}:</span> #{reward.Best} - #{reward.Worst}
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         )}
         <hr className="my-4 border border-gray-600" />
         <div className="mb-4">
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
         <hr className="my-4 border border-gray-600" />
         <div className="mb-4">
            <h4 className="text-xl font-bold mb-2">Top #5 Clans</h4>
            {top5Clans.length > 0 ? (
               <ul>
                  {top5Clans.map((clan, index) => (
                     <li
                        title={`${formatNumberWithUnits(clan.DepositedDiamonds)} Diamonds, ${clan.CountryCode}, Created ${timeSince(clan.Created)}`}
                        key={index}
                        className="mb-2 flex text-center transform transition-all rounded-md border-2 border-gray-800 duration-100 items-center hover:border-gray-500 p-1"
                     >
                        <img src={buildImageUrl(extractImageId(clan.Icon))} alt={`${clan.Name} icon`} className="w-8 h-8 mx-2" />
                        <span className={gettop5RarityClassName(index)}>{clan.Name}</span>: {clan.Points} Points
                     </li>
                  ))}
               </ul>
            ) : (
               <p className="text-gray-400 italic">No Clans Found!</p>
            )}
         </div>
         <p className="italic eagle-text md:hidden">by @prodbyeagle</p>
      </aside>
   );
}

export default Sidebar;