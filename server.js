const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.S_PORT || 5000;
const URI = process.env.MONGODB_URI;

async function startServer() {
   try {
      const client = new MongoClient(URI);
      await client.connect();
      console.log('Connected to MongoDB');

      const db = client.db();
      const usersCollection = db.collection('users');

      app.get('/api/leaderboard', async (req, res) => {
         try {
            const leaderboard = await usersCollection.find().toArray();
            console.log('Leaderboard data retrieved:', leaderboard);
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
