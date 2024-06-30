// src/api/fetchtop5.js

const fetchtop5 = async () => {
   try {
      const response = await fetch('https://biggamesapi.io/api/clans?page=1&pageSize=5&sort=Points&sortOrder=desc');
      if (!response.ok) {
         throw new Error('Failed to fetch top clans.');
      }
      const data = await response.json();
      return data.data; // Assuming data is in the format provided in your example
   } catch (error) {
      console.error('Error fetching top clans:', error);
      return [];
   }
};

export default fetchtop5;
