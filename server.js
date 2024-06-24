const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.S_PORT || 5000;

app.use(cors());
app.use(express.json());

let db; // Globale Variable für die Datenbankverbindung

async function connectToDatabase() {
   const client = new MongoClient(process.env.MONGODB_URI, {
   });

   try {
      await client.connect();
      console.log('Connected to MongoDB');
      db = client.db();
   } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
   }
}

connectToDatabase()
   .then(() => {
      console.log('MongoDB connection established successfully');
   })
   .catch((error) => {
      console.error('MongoDB connection error:', error);
   });

app.get('/api/leaderboard', async (req, res) => {
   try {
      const users = await db.collection('users')
         .find({ xp: { $gt: 0 } })
         .sort({ xp: -1 })
         .limit(10)
         .toArray();

      console.log('Leaderboard data retrieved:', users);

      if (users.length === 0) {
         console.log('No users found in leaderboard');
      }

      res.json(users);
   } catch (error) {
      console.error('Error fetching leaderboard:', error);
      res.status(500).json({ message: error.message });
   }
});


app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});