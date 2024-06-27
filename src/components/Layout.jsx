import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { BattleSidebarContent } from './Sidebar';
import LeaderboardSidebarContent from './LeaderboardSidebarContent';
import Modal from './Modal';
import { fetchClanBattle } from '../api/fetchClanBattle';
import { fetchLeaderboard } from '../api/fetchLeaderboard';
import { updates } from '../updates';
import '../color.css';
import '../css/raritys.css';

const Layout = ({ children }) => {
   const [battle, setBattle] = useState(null);
   const [sidebarOpen, setSidebarOpen] = useState(false);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [modalContent, setModalContent] = useState(null);
   const [leaderboard, setLeaderboard] = useState(null);
   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
   const [touchStartX, setTouchStartX] = useState(null);
   const [touchEndX, setTouchEndX] = useState(null);

   useEffect(() => {
      const handleResize = () => {
         setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener('resize', handleResize);

      const getLeaderboard = async () => {
         try {
            const leader = await fetchLeaderboard();
            setLeaderboard(leader);
         } catch (error) {
            console.error('Error fetching leaderboard:', error);
         }
      };

      // const interval = setInterval(getLeaderboard, 5000);

      const getBattle = async () => {
         try {
            const data = await fetchClanBattle();
            setBattle(data.data);
         } catch (error) {
            console.error('Error fetching clan battle:', error);
         }

         const latestUpdate = updates[0];
         const storedVersion = localStorage.getItem('latestUpdateVersion');

         if (storedVersion !== latestUpdate.version) {
            openModal(
               <div>
                  {updates.map((update, index) => (
                     <div key={index}>
                        <h4 className="text-xl font-bold">{update.version} - {update.date}</h4>
                        <ul className="list-disc list-inside">
                           {update.changes.map((change, idx) => (
                              <li key={idx}>{change}</li>
                           ))}
                        </ul>
                        <h4 className={`mt-4 text-sm italic ${update.from === "prodbyeagle" ? "eagle-text" : ""}`}>From: {update.from}</h4>
                     </div>
                  ))}
               </div>
            );
            localStorage.setItem('latestUpdateVersion', latestUpdate.version);
         }
      };

      getBattle();
      getLeaderboard();

      return () => {
         // clearInterval(interval);
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
   };

   const openModal = (content) => {
      setModalContent(content);
      setIsModalOpen(true);
   };

   const closeModal = () => {
      setIsModalOpen(false);
      setModalContent(null);
   };

   const handleTouchStart = (e) => {
      if (isMobile) {
         setTouchStartX(e.touches[0].clientX);
      }
   };

   const handleTouchMove = (e) => {
      if (isMobile) {
         setTouchEndX(e.touches[0].clientX);
      }
   };

   const handleTouchEnd = () => {
      if (isMobile && touchStartX && touchEndX) {
         if (touchStartX - touchEndX > 50) {
            // Swipe left, close sidebar
            setSidebarOpen(false);
         } else if (touchEndX - touchStartX > 50) {
            // Swipe right, open sidebar
            setSidebarOpen(true);
         }
         // Reset touch positions
         setTouchStartX(null);
         setTouchEndX(null);
      }
   };

   return (
      <div className={`p-4 min-h-screen transition-colors duration-500 ease-in-out bg-gray-900 text-gray-100`}
         onTouchStart={handleTouchStart}
         onTouchMove={handleTouchMove}
         onTouchEnd={handleTouchEnd}
      >
         <Navbar toggleSidebar={toggleSidebar} />
         <div className="relative flex">
            <div className={`fixed inset-0 z-40 md:static md:transform-none transition-transform transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:w-64`}>
               <div className="h-full flex flex-col mt-4">
                  <div>
                     <BattleSidebarContent battle={battle} onClose={toggleSidebar} />
                  </div>
                  <div>
                     <LeaderboardSidebarContent leaderboardData={leaderboard} onClose={toggleSidebar} />
                  </div>
               </div>
            </div>
            {sidebarOpen && (
               <div
                  className="fixed inset-0 bg-black opacity-50 z-30 cursor-pointer md:hidden"
                  onClick={toggleSidebar}
               />
            )}
            <main className="flex-1">
               {React.Children.map(children, child =>
                  React.cloneElement(child, { openModal })
               )}
            </main>
         </div>
         <Modal isOpen={isModalOpen} onClose={closeModal} title="What's New!">
            {modalContent}
         </Modal>
      </div>
   );
};

export default Layout;