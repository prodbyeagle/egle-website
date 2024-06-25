export const fetchLeaderboard = async () => {
   try {
      const response = await fetch('http://localhost:3488/api/leaderboard');
      if (!response.ok) {
         throw new Error('Network response was not ok');
      }
      const leaderboardData = await response.json();
      console.log('Leaderboard data received in frontend:', leaderboardData);
      return leaderboardData;
   } catch (error) {
      console.error('Error fetching leaderboard:', error);
      throw error;
   }
};