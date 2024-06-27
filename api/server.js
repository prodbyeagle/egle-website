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

   await client.connect();
   console.log('Connected to MongoDB');

   cachedDb = client.db('EGLEDB');
   return cachedDb;
}

module.exports = async (req, res) => {
   const db = await connectToDatabase();
   const usersCollection = db.collection('users');

   if (req.method === 'GET' && req.url === '/api/leaderboard') {
      try {
         const leaderboard = await usersCollection.find({ banned: false }).toArray();
         res.status(200).json(leaderboard);
      } catch (error) {
         console.error('Failed to fetch leaderboard:', error);
         res.status(500).json({ error: 'Failed to fetch leaderboard' });
      }
   } else {
      res.status(404).json({ error: 'Not found' });
   }
};
