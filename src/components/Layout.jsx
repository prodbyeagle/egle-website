import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { BattleSidebarContent, LeaderboardSidebarContent } from './Sidebar';
import Modal from './Modal';
import { fetchClanBattle } from '../api/fetchClanBattle';
// import { fetchLeaderboard } from '../api/fetchLeaderboard';
import '../color.css';

const Layout = ({ children }) => {
   const [darkMode, setDarkMode] = useState(false);
   const [battle, setBattle] = useState(null);
   // const [leaderboardData, setLeaderboardData] = useState([]);
   const [sidebarOpen, setSidebarOpen] = useState(false);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [modalContent, setModalContent] = useState(null);

   useEffect(() => {
      const getBattle = async () => {
         const data = await fetchClanBattle();
         setBattle(data.data);
      };

      // const getLeaderboard = async () => {
      //    try {
      //       const data = await fetchLeaderboard();
      //       console.log('Leaderboard data received in frontend:', data);
      //       setLeaderboardData(data);
      //    } catch (error) {
      //       console.error('Error fetching leaderboard data:', error);
      //    }
      // };

      getBattle();
      // getLeaderboard();
   }, []);

   useEffect(() => {
      const storedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
      if (storedDarkMode !== null) {
         setDarkMode(storedDarkMode);
         document.body.classList.toggle('dark', storedDarkMode);
      }
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

   return (
      <div className={`${darkMode ? 'dark' : ''} p-4 min-h-screen transition-colors duration-500 ease-in-out bg-gray-900 text-gray-100`}>
         <Navbar toggleSidebar={toggleSidebar} />
         <div className="relative flex">
            <div className={`inset-0 z-40 md:static md:transform-none transition-transform transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:w-64`}>
               <div className="h-full flex flex-col s:fixed">
                  <div>
                     <BattleSidebarContent battle={battle} onClose={toggleSidebar} />
                  </div>
                  <div>
                     <LeaderboardSidebarContent onClose={toggleSidebar} />
                     {/* leaderboardData={leaderboardData} */}
                  </div>
               </div>
            </div>
            {sidebarOpen && (
               <div
                  className="fixed inset-0 bg-black opacity-50 z-30 cursor-pointer"
                  onClick={toggleSidebar}
               />
            )}
            <main className={`flex-1 transition-transform transform ${sidebarOpen ? 'ml-64' : ''} md:ml-0`}>
               {React.Children.map(children, child =>
                  React.cloneElement(child, { openModal })
               )}
            </main>
         </div>
         <Modal isOpen={isModalOpen} onClose={closeModal} title="Modal Title">
            {modalContent}
         </Modal>
      </div>
   );
};

export default Layout;
