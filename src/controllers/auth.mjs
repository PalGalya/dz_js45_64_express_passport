import User from '../models/user.mjs'
import passport from '../auth/passport.mjs'
import bcrypt from 'bcrypt'

/**
 * Реєстрація нового користувача
 */
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

    // Генерація унікального ID
    const lastUser = await User.findOne().sort({ id: -1 })
    const newId = lastUser ? String(parseInt(lastUser.id) + 1) : '1'

    // Хешування пароля
    const hashedPassword = await bcrypt.hash(password, 10)

    // Створення нового користувача
    const newUser = new User({
      id: newId,
      username: username || email.split('@')[0],
      email,
      password: hashedPassword
    })

    await newUser.save()

    res.status(201).json({
      status: 'success',
      message: 'Користувач успішно зареєстрований',
      data: {
        user: {
          id: newUser.id,
          email: newUser.email
        }
      }
    })
  } catch (error) {
    console.error('Error registering user:', error)
    res.status(500).json({
      status: 'error',
      message: error.message || 'Помилка при реєстрації користувача'
    })
  }
}

/**
 * Авторизація користувача
 */
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

/**
 * Вихід з системи
 */
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

/**
 * Отримання інформації про поточного користувача
 */
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

/**
 * Захищена сторінка (демонстрація)
 */
export const getProtected = (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({
      status: 'error',
      message: 'Доступ заборонено - користувач не авторизований'
    })
  }

  res.status(200).json({
    status: 'success',
    message: 'Це захищена сторінка',
    data: {
      user: {
        id: req.user.id,
        email: req.user.email
      }
    }
  })
}
