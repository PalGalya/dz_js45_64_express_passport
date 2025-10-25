import passport from '../auth/passport.mjs'
import { users } from '../auth/passport.mjs'

// Реєстрація нового користувача (спрощена версія)
export const register = (req, res) => {
  const { email, password } = req.body

  // Перевірка чи користувач вже існує
  const existingUser = users.find((u) => u.email === email)
  if (existingUser) {
    return res.status(400).json({
      status: 'error',
      message: 'Користувач з таким email вже існує'
    })
  }

  // Створення нового користувача
  const newUser = {
    id: String(users.length + 1),
    email,
    password
  }
  users.push(newUser)

  res.status(201).json({
    status: 'success',
    message: 'Користувач успішно зареєстрований',
    data: {
      email: email
    }
  })
}

// Авторизація користувача
export const login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err)
    }

    if (!user) {
      const message = info?.message || 'Авторизація не вдалася'
      return res.status(401).json({
        status: 'error',
        message: message
      })
    }

    req.logIn(user, (loginErr) => {
      if (loginErr) {
        return next(loginErr)
      }

      res.json({
        status: 'success',
        message: 'Авторизація пройшла успішно',
        data: {
          user: {
            id: user.id,
            email: user.email
          }
        }
      })
    })
  })(req, res, next)
}

// Вихід з системи
export const logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err)
    }

    res.json({
      status: 'success',
      message: 'Ви успішно вийшли з системи'
    })
  })
}

// Отримання інформації про поточного користувача
export const getCurrentUser = (req, res) => {
  if (req.isAuthenticated()) {
    res.json({
      status: 'success',
      data: {
        user: {
          id: req.user.id,
          email: req.user.email
        }
      }
    })
  } else {
    res.status(401).json({
      status: 'error',
      message: 'Користувач не авторизований'
    })
  }
}
