import { Router } from 'express'
import {
  register,
  login,
  logout,
  getCurrentUser
} from '../controllers/auth.mjs'
import { requireAuth } from '../middleware/auth.mjs'
import { celebrate, Joi, Segments } from 'celebrate'

const router = Router()

// Валідація для реєстрації
const registerValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    username: Joi.string().min(3).max(30).optional(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  })
})

// Валідація для входу
const loginValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  })
})

// Реєстрація
router.post('/register', registerValidation, register)

// Вхід
router.post('/login', loginValidation, login)

// Вихід (потребує авторизації)
router.post('/logout', requireAuth, logout)

// Отримання інформації про поточного користувача
router.get('/me', requireAuth, getCurrentUser)

// Захищений маршрут
router.get('/protected', requireAuth, (req, res) => {
  res.json({
    status: 'success',
    message: 'Ви успішно потрапили на захищену сторінку!',
    data: {
      user: {
        id: req.user._id,
        username: req.user.username,
        email: req.user.email
      },
      timestamp: new Date().toISOString()
    }
  })
})

export default router
