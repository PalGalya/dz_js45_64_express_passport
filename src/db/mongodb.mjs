import { MongoClient } from 'mongodb'

let client = null
let db = null

/**
 * Підключення до MongoDB Atlas
 * @returns {Promise<import('mongodb').Db>} - Database instance
 */
export async function connectToDatabase() {
  if (db) {
    return db
  }

  try {
    const uri = process.env.MONGODB_URI

    if (!uri) {
      throw new Error('MONGODB_URI is not defined in environment variables')
    }

    client = new MongoClient(uri, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000
    })

    await client.connect()

    console.log('✅ Successfully connected to MongoDB Atlas')

    // Отримуємо назву бази даних з URI або використовуємо за замовчуванням
    const dbName = process.env.MONGODB_DB_NAME || 'expressApp'
    db = client.db(dbName)

    return db
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message)
    throw error
  }
}

/**
 * Отримання колекції з бази даних
 * @param {string} collectionName - Назва колекції
 * @returns {Promise<import('mongodb').Collection>}
 */
export async function getCollection(collectionName) {
  const database = await connectToDatabase()
  return database.collection(collectionName)
}

/**
 * Закриття з'єднання з базою даних
 */
export async function closeDatabase() {
  if (client) {
    await client.close()
    client = null
    db = null
    console.log('🔌 MongoDB connection closed')
  }
}

/**
 * Перевірка підключення до бази даних
 * @returns {Promise<boolean>}
 */
export async function checkConnection() {
  try {
    const database = await connectToDatabase()
    await database.command({ ping: 1 })
    return true
  } catch (error) {
    console.error('Database connection check failed:', error.message)
    return false
  }
}
