import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Modal from './Modal';
import { fetchClanBattle } from '../api/fetchClanBattle';
import '../color.css';

const Layout = ({ children }) => {
   const [darkMode, setDarkMode] = useState(false);
   const [battle, setBattle] = useState(null);
   const [sidebarOpen, setSidebarOpen] = useState(false);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [modalContent, setModalContent] = useState(null);

   useEffect(() => {
      const getBattle = async () => {
         const data = await fetchClanBattle();
         setBattle(data.data);
      };

      getBattle();
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
      console.log('Opening modal with content:', content);
      setModalContent(content);
      setIsModalOpen(true);
   };

   const closeModal = () => {
      console.log('Closing modal');
      setIsModalOpen(false);
      setModalContent(null);
   };

   console.log('Layout render - isModalOpen:', isModalOpen);

   return (
      <div className={`${darkMode ? 'dark' : ''} p-4 min-h-screen transition-colors duration-500 ease-in-out bg-gray-900 text-gray-100`}>
         <Navbar toggleSidebar={toggleSidebar} />
         <div className="flex relative">
            <div className={`fixed inset-0 z-40 md:static md:transform-none transition-transform transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
               <Sidebar battle={battle} onClose={toggleSidebar} />
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
