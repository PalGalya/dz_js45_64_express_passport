import mongoose from 'mongoose'
import { CONFIG } from '../config.mjs'

/**
 * Підключення до MongoDB Atlas через Mongoose
 */
export async function connectToDatabase() {
  try {
    const uri = CONFIG.MONGODB_URI

    if (!uri) {
      throw new Error('MONGODB_URI is not defined in environment variables')
    }

    // Додаємо обробники подій підключення
    mongoose.connection.on('connected', () => {
      console.log('✅ Successfully connected to MongoDB Atlas via Mongoose')
    })

    mongoose.connection.on('error', (err) => {
      console.error('❌ Mongoose connection error:', err)
    })

    mongoose.connection.on('disconnected', () => {
      console.log('❌ Mongoose connection disconnected')
    })

    // Підключаємося до бази даних
    await mongoose.connect(uri)

    return mongoose.connection
  } catch (error) {
    console.error('❌ Mongoose connection error:', error.message)
    throw error
  }
}

/**
 * Закриття з'єднання з базою даних через Mongoose
 */
export async function closeDatabase() {
  try {
    await mongoose.connection.close()
    console.log('🔌 Mongoose connection closed')
  } catch (error) {
    console.error('❌ Error closing Mongoose connection:', error.message)
  }
}

/**
 * Перевірка підключення до бази даних через Mongoose
 * @returns {Promise<boolean>}
 */
export async function checkConnection() {
  try {
    if (mongoose.connection.readyState !== 1) {
      return false
    }
    await mongoose.connection.db.admin().ping()
    return true
  } catch (error) {
    console.error('Database connection check failed:', error.message)
    return false
  }
}
