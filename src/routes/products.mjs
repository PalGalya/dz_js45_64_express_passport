import express from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import {
  getAllProducts,
  getProductById,
  createProduct
} from '../controllers/products.mjs'

const router = express.Router()

/**
 * @route GET /api/products
 * @desc Отримати всі продукти
 */
router.get('/', getAllProducts)

/**
 * @route GET /api/products/:id
 * @desc Отримати продукт за ID
 */
router.get('/:id', getProductById)

/**
 * @route POST /api/products
 * @desc Створити новий продукт
 */
router.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object({
      name: Joi.string().required().min(3).max(100),
      price: Joi.number().required().min(0),
      description: Joi.string().required().min(10).max(500),
      category: Joi.string().required().min(3).max(50)
    })
  }),
  createProduct
)

export default router
