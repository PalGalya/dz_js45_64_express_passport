import { Router } from 'express'
import {
  register,
  login,
  logout,
  getCurrentUser,
  getProtected
} from '../controllers/auth.mjs'
import { isAuthenticated } from '../middleware/auth.mjs'
import { celebrate, Joi, Segments } from 'celebrate'

const router = Router()

// Валідація для реєстрації та входу
const authValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  })
})

/**
 * @route POST /auth/register
 * @desc Реєстрація нового користувача
 */
router.post('/register', authValidation, register)

/**
 * @route POST /auth/login
 * @desc Вхід в систему
 */
router.post('/login', authValidation, login)

/**
 * @route POST /auth/logout
 * @desc Вихід з системи (потребує авторизації)
 */
router.post('/logout', isAuthenticated, logout)

/**
 * @route GET /auth/me
 * @desc Отримання інформації про поточного користувача
 */
router.get('/me', isAuthenticated, getCurrentUser)

/**
 * @route GET /auth/protected
 * @desc Захищена сторінка (демонстрація)
 */
router.get('/protected', isAuthenticated, getProtected)

export default router
