import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'

// Список користувачів (в реальному додатку це буде база даних)
const users = [
  {
    id: '1',
    email: 'admin@example.com',
    password: 'password123'
  },
  {
    id: '2',
    email: 'user@example.com',
    password: 'userpass'
  }
]

// Налаштовуємо локальну стратегію з використанням email
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    (email, password, done) => {
      console.log('Спроба авторизації для email:', email)

      const user = users.find(
        (u) => u.email === email && u.password === password
      )

      if (user) {
        return done(null, user)
      }

      return done(null, false, { message: 'Невірний email або пароль' })
    }
  )
)

// Серіалізація користувача (збереження в сесії)
passport.serializeUser((user, done) => {
  done(null, user.id)
})

// Десеріалізація користувача (отримання з сесії)
passport.deserializeUser((id, done) => {
  const user = users.find((u) => u.id === id)
  if (user) {
    done(null, user)
  } else {
    done(new Error('Користувача не знайдено'))
  }
})

export default passport
