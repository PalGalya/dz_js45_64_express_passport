import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import bcrypt from 'bcrypt'
import User from '../models/user.mjs'

/**
 * Налаштування локальної стратегії з використанням Mongoose
 */
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      try {
        console.log('🔐 Спроба авторизації для email:', email)

        // Пошук користувача в БД
        const user = await User.findOne({ email })

        if (!user) {
          return done(null, false, { message: 'Невірний email або пароль' })
        }

        // Порівняння хешованого пароля
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
          return done(null, false, { message: 'Невірний email або пароль' })
        }

        console.log('✅ Користувач успішно авторизований:', email)
        return done(null, user)
      } catch (error) {
        console.error('❌ Помилка при авторизації:', error)
        return done(error)
      }
    }
  )
)

/**
 * Серіалізація користувача (збереження в сесії)
 */
passport.serializeUser((user, done) => {
  done(null, user._id.toString())
})

/**
 * Десеріалізація користувача (отримання з сесії)
 */
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id)
    if (user) {
      done(null, user)
    } else {
      done(new Error('Користувача не знайдено'))
    }
  } catch (error) {
    done(error)
  }
})

export default passport
