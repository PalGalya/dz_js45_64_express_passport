import User from '../models/user.mjs'
import bcrypt from 'bcrypt'

export const initTestUsers = async () => {
  try {
    // Перевіряємо чи є вже користувачі в базі
    const existingUsers = await User.countDocuments()

    if (existingUsers === 0) {
      console.log('Створюємо тестових користувачів...')

      // Гешуємо паролі
      const hashedPasswordAdmin = await bcrypt.hash('password123', 10)
      const hashedPasswordUser = await bcrypt.hash('userpass', 10)

      const testUsers = [
        {
          id: 'admin1',
          username: 'admin',
          email: 'admin@example.com',
          password: hashedPasswordAdmin,
          role: 'admin'
        },
        {
          id: 'user1',
          username: 'user',
          email: 'user@example.com',
          password: hashedPasswordUser,
          role: 'user'
        }
      ]

      await User.insertMany(testUsers)
      console.log('✅ Тестові користувачі створені успішно')
    } else {
      console.log('✅ Користувачі вже існують в базі даних')
    }
  } catch (error) {
    console.error('❌ Помилка при створенні тестових користувачів:', error)
  }
}
