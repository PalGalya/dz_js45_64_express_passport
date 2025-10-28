import express from 'express'
import { getCollection } from '../db/mongodb.mjs'

const router = express.Router()

/**
 * @route GET /api/cursor/products
 * @desc Process products using cursor with forEach
 */
router.get('/products', async (req, res) => {
  try {
    const collection = await getCollection('products')
    const cursor = collection.find()

    const products = []
    await cursor.forEach((doc) => products.push(doc))

    res.status(200).json({
      message: 'Products processed using cursor with forEach',
      count: products.length,
      products
    })
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Failed to process products', details: error })
  }
})

/**
 * @route GET /api/cursor/products/batch
 * @desc Process products using cursor with batching
 */
router.get('/products/batch', async (req, res) => {
  try {
    const collection = await getCollection('products')
    const cursor = collection.find()

    const batchSize = parseInt(req.query.batchSize) || 5
    const products = []
    let batch = []

    await cursor.forEach((doc) => {
      batch.push(doc)
      if (batch.length === batchSize) {
        products.push([...batch])
        batch = []
      }
    })

    // Add remaining items
    if (batch.length > 0) {
      products.push(batch)
    }

    res.status(200).json({
      message: `Products processed using cursor with batch size ${batchSize}`,
      batches: products.length,
      batchSize,
      products
    })
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Failed to process products in batches', details: error })
  }
})

/**
 * @route GET /api/cursor/products/stream
 * @desc Process products using cursor stream
 */
router.get('/products/stream', async (req, res) => {
  try {
    const collection = await getCollection('products')
    const cursor = collection.find()

    const products = []
    let processedCount = 0

    // Simulate streaming by processing one document at a time
    while (await cursor.hasNext()) {
      const doc = await cursor.next()
      products.push(doc)
      processedCount++
    }

    res.status(200).json({
      message: 'Products processed using cursor streaming',
      processedCount,
      products
    })
  } catch (error) {
    res.status(500).json({ error: 'Failed to stream products', details: error })
  }
})

export default router
