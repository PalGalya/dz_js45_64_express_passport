import express from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controllers/products.mjs'
import { isAuthenticated } from '../middleware/auth.mjs'

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
 * @desc Створити новий продукт (тільки для авторизованих)
 */
router.post(
  '/',
  isAuthenticated,
  celebrate({
    [Segments.BODY]: Joi.object({
      name: Joi.string().required().min(3).max(100),
      price: Joi.number().required().min(0),
      description: Joi.string().required().min(10).max(500),
      category: Joi.string()
        .required()
        .valid('electronics', 'clothing', 'food', 'furniture'),
      stock: Joi.number().optional().min(0)
    })
  }),
  createProduct
)

/**
 * @route PUT /api/products/:id
 * @desc Оновити продукт (тільки для авторизованих)
 */
router.put(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.BODY]: Joi.object({
      name: Joi.string().min(3).max(100),
      price: Joi.number().min(0),
      description: Joi.string().min(10).max(500),
      category: Joi.string().valid(
        'Электроника',
        'Аксесуари',
        'Ноутбуки',
        'Монітори',
        'Навушники',
        'Клавіатури',
        'Миші',
        'Інше'
      ),
      stock: Joi.number().min(0),
      rating: Joi.number().min(0).max(5)
    }).min(1)
  }),
  updateProduct
)

/**
 * @route DELETE /api/products/:id
 * @desc Видалити продукт (тільки для авторизованих)
 */
router.delete('/:id', isAuthenticated, deleteProduct)

export default router
