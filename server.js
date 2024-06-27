const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.S_PORT || 5000;
const URI = process.env.URI;

async function startServer() {
   try {
      const client = new MongoClient(URI, {
         serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
         }
      });
      await client.connect();
      console.log('Connected to MongoDB');

      const db = client.db('EGLEDB');
      const usersCollection = db.collection('users');

      await client.db().command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");

      app.get('/api/leaderboard', async (req, res) => {
         try {
            const leaderboard = await usersCollection
               .find({
                  banned: { $ne: true },
                  $and: [{ level: { $ne: 0 } }, { xp: { $ne: 0 } }]
               })
               .sort({ level: -1, xp: -1 })
               .limit(10)
               .toArray();

            res.json(leaderboard);
         } catch (error) {
            console.error('Failed to fetch leaderboard:', error);
            res.status(500).json({ error: 'Failed to fetch leaderboard' });
         }
      });


      app.listen(PORT, () => {
         console.log(`Server is running on port ${PORT}`);
         console.log(`URL: http://localhost:${PORT}/api/leaderboard`);
      });
   } catch (error) {
      console.error('Failed to connect to MongoDB', error);
      process.exit(1);
   }
}

startServer();