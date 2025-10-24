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

// Валідація для реєстрації та входу
const authValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  })
})

// Реєстрація
router.post('/register', authValidation, register)

// Вхід
router.post('/login', authValidation, login)

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
        id: req.user.id,
        email: req.user.email
      },
      timestamp: new Date().toISOString()
    }
  })
})

export default router
