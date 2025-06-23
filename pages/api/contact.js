// /api/contact
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input' })
      return
    }

    //Store it in the database
    const newMessage = {
      email,
      name,
      message,
    }

    console.log('newMessage', newMessage)

    let client

    try {
      client = await MongoClient.connect(process.env.MONGODB)
    } catch (error) {
      res.status(500).json({ message: 'Could not connect' })
      return
    }

    const db = client.db('contacts')

    try {
      await db.collection('messages').insertOne(newMessage)
      res.status(201).json({ message: 'Success', data: newMessage })
    } catch (error) {
      res.status(500).json({ message: 'Failed to save' })
    }

    client.close()
  }
}
