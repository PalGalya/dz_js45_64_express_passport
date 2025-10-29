import passport from '../auth/passport.mjs'
import User from '../models/user.mjs'

// Реєстрація нового користувача
export const register = async (req, res) => {
  try {
    const { email, password, username } = req.body

    // Перевірка чи користувач вже існує
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({
        status: 'error',
        message: 'Користувач з таким email вже існує'
      })
    }

    // Створення нового користувача
    const newUser = new User({
      username: username || email.split('@')[0], // використовуємо частину email як username
      email,
      password
    })

    await newUser.save()

    res.status(201).json({
      status: 'success',
      message: 'Користувач успішно зареєстрований',
      data: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email
      }
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Помилка при реєстрації користувача',
      details: error.message
    })
  }
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
            id: user._id,
            username: user.username,
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
          id: req.user._id,
          username: req.user.username,
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
