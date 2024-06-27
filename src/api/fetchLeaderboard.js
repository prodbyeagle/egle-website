export const fetchLeaderboard = async () => {
   try {
      const response = await fetch(`/api/server`);
      if (!response.ok) {
         throw new Error('Network response was not ok');
      }
      const leaderboardData = await response.json();
      return leaderboardData;
   } catch (error) {
      console.error('Error fetching leaderboard:', error);
      throw error;
   }
};