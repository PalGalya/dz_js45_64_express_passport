import express from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import {
  getAllProducts,
  getProductById,
  createProduct
} from '../controllers/products.mjs'
import Product from '../models/product.mjs'
import { requireAuth } from '../middleware/auth.mjs'

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
  requireAuth,
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

// Insert one document
router.post('/insertOne', requireAuth, async (req, res) => {
  try {
    const product = new Product(req.body)
    const result = await product.save()
    res.status(201).json({ message: 'Document inserted', result })
  } catch (error) {
    res.status(500).json({ error: 'Failed to insert document', details: error })
  }
})

// Insert many documents
router.post('/insertMany', requireAuth, async (req, res) => {
  try {
    const result = await Product.insertMany(req.body)
    res.status(201).json({ message: 'Documents inserted', result })
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Failed to insert documents', details: error })
  }
})

// Update one document
router.put('/updateOne', requireAuth, async (req, res) => {
  try {
    const result = await Product.updateOne(req.body.filter, req.body.update)
    res.status(200).json({ message: 'Document updated', result })
  } catch (error) {
    res.status(500).json({ error: 'Failed to update document', details: error })
  }
})

// Update many documents
router.put('/updateMany', requireAuth, async (req, res) => {
  try {
    const result = await Product.updateMany(req.body.filter, req.body.update)
    res.status(200).json({ message: 'Documents updated', result })
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Failed to update documents', details: error })
  }
})

// Replace one document
router.put('/replaceOne', requireAuth, async (req, res) => {
  try {
    const result = await Product.replaceOne(
      req.body.filter,
      req.body.replacement
    )
    res.status(200).json({ message: 'Document replaced', result })
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Failed to replace document', details: error })
  }
})

// Delete one document
router.delete('/deleteOne', requireAuth, async (req, res) => {
  try {
    const result = await Product.deleteOne(req.body.filter)
    res.status(200).json({ message: 'Document deleted', result })
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete document', details: error })
  }
})

// Delete many documents
router.delete('/deleteMany', requireAuth, async (req, res) => {
  try {
    const result = await Product.deleteMany(req.body.filter)
    res.status(200).json({ message: 'Documents deleted', result })
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Failed to delete documents', details: error })
  }
})

// Enhanced data reading with projection
router.post('/findWithProjection', requireAuth, async (req, res) => {
  try {
    const result = await Product.find(req.body.filter, req.body.projection)
    res.status(200).json({ message: 'Data retrieved', result })
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve data', details: error })
  }
})

export default router
