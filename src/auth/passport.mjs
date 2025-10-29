import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import User from '../models/user.mjs'

// Налаштовуємо локальну стратегію з використанням email
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      try {
        console.log('Спроба авторизації для email:', email)

        const user = await User.findOne({ email })

        if (user && user.password === password) {
          return done(null, user)
        }

        return done(null, false, { message: 'Невірний email або пароль' })
      } catch (error) {
        return done(error)
      }
    }
  )
)

// Серіалізація користувача (збереження в сесії)
passport.serializeUser((user, done) => {
  done(null, user._id.toString())
})

// Десеріалізація користувача (отримання з сесії)
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
