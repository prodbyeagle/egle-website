const { MongoClient, ServerApiVersion } = require('mongodb');

let cachedDb = null;
const URI = process.env.URI;

async function connectToDatabase() {
   if (cachedDb) {
      return cachedDb;
   }

   const client = new MongoClient(URI, {
      serverApi: {
         version: ServerApiVersion.v1,
         strict: true,
         deprecationErrors: true,
      }
   });

   try {
      await client.connect();
      console.log('Connected to MongoDB');

      cachedDb = client.db('EGLEDB');
      return cachedDb;
   } catch (error) {
      console.error('Failed to connect to MongoDB:', error);
      throw error;
   }
}

module.exports = async (req, res) => {
   try {
      const db = await connectToDatabase();
      console.log('Database connection established');

      const usersCollection = db.collection('users');

      if (req.method === 'GET' && req.url === '/api/server') {
         console.log('Fetching leaderboard data...');
         const leaderboard = await usersCollection.find({ banned: false }).toArray();
         console.log('Leaderboard data retrieved:', leaderboard);
         res.status(200).json(leaderboard);
      } else {
         console.log('Endpoint not found:', req.method, req.url);
         res.status(404).json({ error: 'Not found' });
      }
   } catch (error) {
      console.error('Internal server error:', error);
      res.status(500).json({ error: 'Internal server error' });
   }
};