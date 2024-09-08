import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      await client.connect();
      const database = client.db('mydatabase');
      const collection = database.collection('submissions');

      const submissions = await collection.find({}).toArray();
      res.status(200).json(submissions);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching submissions' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
