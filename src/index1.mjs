import express from 'express'
import { CONFIG } from './config.mjs'
import { MongoClient } from 'mongodb'

const app = express()
const PORT = CONFIG.PORT
const URI = CONFIG.MONGODB_URI

const client = new MongoClient(URI)

async function run() {
  try {
    await client.connect()
    console.log('Connected to Database')

    const result = await client.db(CONFIG.DB_NAME).command({ ping: 1 })
    console.log('MongoDB responded', result)

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
  } finally {
    await client.close()
  }
}

run().catch(console.dir)
