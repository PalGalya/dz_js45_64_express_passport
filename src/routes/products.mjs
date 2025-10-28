import express from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import {
  getAllProducts,
  getProductById,
  createProduct
} from '../controllers/products.mjs'
import { getCollection } from '../db/mongodb.mjs'

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

// Insert one document
router.post('/insertOne', async (req, res) => {
  try {
    const collection = await getCollection('products')
    const result = await collection.insertOne(req.body)
    res.status(201).json({ message: 'Document inserted', result })
  } catch (error) {
    res.status(500).json({ error: 'Failed to insert document', details: error })
  }
})

// Insert many documents
router.post('/insertMany', async (req, res) => {
  try {
    const collection = await getCollection('products')
    const result = await collection.insertMany(req.body)
    res.status(201).json({ message: 'Documents inserted', result })
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Failed to insert documents', details: error })
  }
})

// Update one document
router.put('/updateOne', async (req, res) => {
  try {
    const collection = await getCollection('products')
    const result = await collection.updateOne(req.body.filter, req.body.update)
    res.status(200).json({ message: 'Document updated', result })
  } catch (error) {
    res.status(500).json({ error: 'Failed to update document', details: error })
  }
})

// Update many documents
router.put('/updateMany', async (req, res) => {
  try {
    const collection = await getCollection('products')
    const result = await collection.updateMany(req.body.filter, req.body.update)
    res.status(200).json({ message: 'Documents updated', result })
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Failed to update documents', details: error })
  }
})

// Replace one document
router.put('/replaceOne', async (req, res) => {
  try {
    const collection = await getCollection('products')
    const result = await collection.replaceOne(
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
router.delete('/deleteOne', async (req, res) => {
  try {
    const collection = await getCollection('products')
    const result = await collection.deleteOne(req.body.filter)
    res.status(200).json({ message: 'Document deleted', result })
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete document', details: error })
  }
})

// Delete many documents
router.delete('/deleteMany', async (req, res) => {
  try {
    const collection = await getCollection('products')
    const result = await collection.deleteMany(req.body.filter)
    res.status(200).json({ message: 'Documents deleted', result })
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Failed to delete documents', details: error })
  }
})

// Enhanced data reading with projection
router.post('/findWithProjection', async (req, res) => {
  try {
    const collection = await getCollection('products')
    const result = await collection
      .find(req.body.filter, req.body.projection)
      .toArray()
    res.status(200).json({ message: 'Data retrieved', result })
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve data', details: error })
  }
})

export default router
