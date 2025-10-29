import User from '../models/user.mjs'

export const initTestUsers = async () => {
  try {
    // Перевіряємо чи є вже користувачі в базі
    const existingUsers = await User.countDocuments()

    if (existingUsers === 0) {
      console.log('Створюємо тестових користувачів...')

      const testUsers = [
        {
          username: 'admin',
          email: 'admin@example.com',
          password: 'password123',
          role: 'admin'
        },
        {
          username: 'user',
          email: 'user@example.com',
          password: 'userpass',
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
