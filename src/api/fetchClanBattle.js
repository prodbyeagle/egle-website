export const fetchClanBattle = async () => {
   try {
      const response = await fetch('https://biggamesapi.io/api/activeClanBattle');
      const data = await response.json();
      return data;
   } catch (error) {
      console.error('Error fetching clan battle:', error);
   }
};
