import React from 'react';
import '../css/raritys.css';

function Sidebar({ battle, onClose }) {
   const getRarityClassName = (item) => {
      if (item && item._data && item._data.id && item._data.id === 'Huge Safety Cat') {
         if (item.pt === 1) {
            return 'golden';
         } else if (item.pt === 2) {
            return 'rainbow';
         }
      }
      return '';
   };

   return (
      <aside className="bg-gray-800 text-gray-200 mt-3 max-h-full p-4 h-screen w-64 rounded-md z-40 fixed md:static md:transform-none transition-transform transform md:translate-x-0">
         <div className="flex justify-between items-center mb-4">
            <button className="text-gray-300 hover:text-white focus:outline-none md:hidden" onClick={onClose}>
               Close
            </button>
         </div>
         {battle && (
            <div>
               <h3 className="text-xl font-bold mb-4">Current Battle</h3>
               <div className="mb-4">
                  <p className="mb-2"><span className="font-semibold"></span> {battle.configData.Title}</p>
                  <p className="mb-2">
                     <span className="font-semibold">From:</span> {new Date(battle.configData.StartTime * 1000).toLocaleString()}
                  </p>
                  <p className="mb-4">
                     <span className="font-semibold">Till:</span> {new Date(battle.configData.FinishTime * 1000).toLocaleString()}
                  </p>
               </div>
               <div>
                  <h4 className="text-lg font-bold mb-2">Placement Rewards</h4>
                  <ul>
                     {battle.configData.PlacementRewards.map((reward, index) => (
                        <li key={index} className="mb-2">
                           <span className="font-semibold">{reward.Item._data.id}:</span> #{reward.Best} - #{reward.Worst}
                           {reward.Item._data.id === 'Huge Safety Cat' && (
                              <span className={getRarityClassName(reward.Item._data)}>
                                 (pt: {reward.Best})
                              </span>
                           )}
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         )}
      </aside>
   );
}

export default Sidebar;