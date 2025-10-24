import passport from '../auth/passport.mjs'

// Реєстрація нового користувача (спрощена версія)
export const register = (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({
      status: 'error',
      message: "Email та пароль є обов'язковими полями"
    })
  }

  // В реальному додатку тут би була перевірка на існування користувача
  // та збереження в базу даних з хешуванням пароля
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
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({
      status: 'error',
      message: "Email та пароль є обов'язковими полями"
    })
  }

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
