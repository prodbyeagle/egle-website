import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Modal from './Modal';
import { fetchClanBattle } from '../api/fetchClanBattle';
import { fetchLeaderboard } from '../api/fetchLeaderboard';
import fetchtop5 from '../api/fetchtop5';
import { updates } from '../updates';
import '../color.css';
import '../css/raritys.css';

const Layout = ({ children }) => {
   const [battle, setBattle] = useState(null);
   const [sidebarOpen, setSidebarOpen] = useState(false);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [modalContent, setModalContent] = useState(null);
   const [top5Clans, settop5Clans] = useState([]);
   const [leaderboard, setLeaderboard] = useState(null);
   const [modalTitle, setModalTitle] = useState('');
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

      const gettop5Clans = async () => {
         try {
            const top5 = await fetchtop5();
            settop5Clans(top5);
         } catch (error) {
            console.error('Error fetching top 10 clans:', error);
         }
      };

      gettop5Clans();

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
                        <h4 className="text-lg font-bold">{update.version} - {update.date}</h4>
                        <ul className="list-disc list-inside">
                           {update.changes.map((change, idx) => (
                              <li key={idx}>{change}</li>
                           ))}
                        </ul>
                        <h4 className="mt-4 text-sm italic">
                           From: <span className={update.from === "prodbyeagle" ? "eagle-text" : ""}>{update.from}</span>
                        </h4>
                     </div>
                  ))}
               </div>,
               `What's New! - ${latestUpdate.title}`
            );
            localStorage.setItem('latestUpdateVersion', latestUpdate.version);
         }
      };

      getBattle();
      getLeaderboard();

      setInterval(() => {
         gettop5Clans();
      }, 1800000);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
   };

   const openModal = (content, title) => {
      setModalContent(content);
      setModalTitle(title);
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

   const handleMouseDown = (e) => {
      if (!isMobile) {
         setTouchStartX(e.clientX);
      }
   };

   const handleMouseMove = (e) => {
      if (!isMobile && touchStartX !== null) {
         setTouchEndX(e.clientX);
      }
   };

   const handleMouseUp = () => {
      if (!isMobile && touchStartX !== null && touchEndX !== null) {
         const deltaX = touchStartX - touchEndX;
         const threshold = 50;

         if (deltaX > threshold) {
            // Wisch nach links: Sidebar schließen
            setSidebarOpen(false);
         } else if (deltaX < -threshold) {
            // Wisch nach rechts: Sidebar öffnen
            setSidebarOpen(true);
         }

         // Zurücksetzen der Touch-Werte
         setTouchStartX(null);
         setTouchEndX(null);
      }
   };

   const handleTouchEnd = () => {
      if (isMobile && touchStartX !== null && touchEndX !== null) {
         const deltaX = touchStartX - touchEndX;
         const threshold = 50;

         if (deltaX > threshold) {
            // Wisch nach links: Sidebar schließen
            setSidebarOpen(false);
         } else if (deltaX < -threshold) {
            // Wisch nach rechts: Sidebar öffnen
            setSidebarOpen(true);
         }

         // Zurücksetzen der Touch-Werte
         setTouchStartX(null);
         setTouchEndX(null);
      }
   };

   return (
      <div className={`p-4 min-h-screen transition-colors duration-500 ease-in-out bg-gray-900 text-gray-100`}
         onTouchStart={handleTouchStart}
         onTouchMove={handleTouchMove}
         onTouchEnd={handleTouchEnd}
         onMouseDown={handleMouseDown}
         onMouseMove={handleMouseMove}
         onMouseUp={handleMouseUp}
      >
         <Navbar toggleSidebar={toggleSidebar} />
         <div className="relative flex">
            <div className={`sidebar-container inset-0 z-40 md:relative md:transform-none transition-transform transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-20'}`}>
               <div className="h-full flex flex-col mt-4">
                  <Sidebar
                     battle={battle}
                     leaderboardData={leaderboard}
                     top5Clans={top5Clans} // Übergib die Top 10 Clans an die Sidebar
                     onClose={toggleSidebar}
                     sidebarOpen={sidebarOpen}
                     isMobile={isMobile}
                  />
               </div>
            </div>

            {sidebarOpen && isMobile && (
               <div
                  className="fixed inset-0 bg-black opacity-50 z-30 cursor-pointer"
                  onClick={toggleSidebar}
               />
            )}
            <main className="flex-1">
               {React.Children.map(children, child =>
                  React.cloneElement(child, { openModal })
               )}
            </main>
         </div>
         <Modal isOpen={isModalOpen} onClose={closeModal} title={modalTitle}>
            {modalContent}
         </Modal>
      </div>
   );
};

export default Layout;