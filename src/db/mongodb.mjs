import mongoose from 'mongoose'

/**
 * Підключення до MongoDB Atlas використовуючи Mongoose ORM
 * @returns {Promise<typeof mongoose>} - Mongoose instance
 */
export async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) {
    console.log('✅ Already connected to MongoDB Atlas')
    return mongoose
  }

  try {
    const uri = process.env.MONGODB_URI

    if (!uri) {
      throw new Error('MONGODB_URI is not defined in environment variables')
    }

    await mongoose.connect(uri, {
      dbName: process.env.MONGODB_DB_NAME || 'expressApp',
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      connectTimeoutMS: 10000,
      retryWrites: true
    })

    console.log('✅ Successfully connected to MongoDB Atlas with Mongoose ORM')

    return mongoose
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message)
    throw error
  }
}

/**
 * Закриття з'єднання з базою даних
 */
export async function closeDatabase() {
  try {
    await mongoose.disconnect()
    console.log('🔌 MongoDB connection closed')
  } catch (error) {
    console.error('Error closing database connection:', error.message)
    throw error
  }
}

/**
 * Перевірка підключення до бази даних
 * @returns {Promise<boolean>}
 */
export async function checkConnection() {
  try {
    await mongoose.connection.db.admin().ping()
    return true
  } catch (error) {
    console.error('Database connection check failed:', error.message)
    return false
  }
}

/**
 * Отримання MongoDB колекції для прямої роботи з даними (при потребі)
 * @param {string} collectionName - Назва колекції
 * @returns {Promise<import('mongoose').Collection>}
 */
export async function getCollection(collectionName) {
  await connectToDatabase()
  const db = mongoose.connection.db
  return db.collection(collectionName)
}
