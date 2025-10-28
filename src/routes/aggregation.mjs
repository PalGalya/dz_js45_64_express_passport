import express from 'express'
import { getCollection } from '../db/mongodb.mjs'

const router = express.Router()

/**
 * @route GET /api/aggregation/products/stats
 * @desc Get general product statistics using aggregation
 */
router.get('/products/stats', async (req, res) => {
  try {
    const collection = await getCollection('products')
    const stats = await collection
      .aggregate([
        {
          $group: {
            _id: null,
            averagePrice: { $avg: '$price' },
            maxPrice: { $max: '$price' },
            minPrice: { $min: '$price' },
            totalProducts: { $sum: 1 },
            uniqueCategories: { $addToSet: '$category' },
            totalValue: { $sum: '$price' }
          }
        },
        {
          $project: {
            _id: 0,
            averagePrice: { $round: ['$averagePrice', 2] },
            maxPrice: 1,
            minPrice: 1,
            totalProducts: 1,
            uniqueCategories: 1,
            totalValue: { $round: ['$totalValue', 2] },
            categoryCount: { $size: '$uniqueCategories' }
          }
        }
      ])
      .toArray()

    res.status(200).json({
      message: 'General product statistics',
      stats: stats[0] || {}
    })
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Failed to get product statistics', details: error })
  }
})

/**
 * @route GET /api/aggregation/products/by-category
 * @desc Get product statistics grouped by category
 */
router.get('/products/by-category', async (req, res) => {
  try {
    const collection = await getCollection('products')
    const stats = await collection
      .aggregate([
        {
          $group: {
            _id: '$category',
            count: { $sum: 1 },
            averagePrice: { $avg: '$price' },
            maxPrice: { $max: '$price' },
            minPrice: { $min: '$price' },
            totalValue: { $sum: '$price' }
          }
        },
        {
          $project: {
            category: '$_id',
            _id: 0,
            count: 1,
            averagePrice: { $round: ['$averagePrice', 2] },
            maxPrice: 1,
            minPrice: 1,
            totalValue: { $round: ['$totalValue', 2] }
          }
        },
        { $sort: { count: -1 } }
      ])
      .toArray()

    res.status(200).json({
      message: 'Product statistics by category',
      stats
    })
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Failed to get category statistics', details: error })
  }
})

/**
 * @route GET /api/aggregation/products/price-ranges
 * @desc Get product count by price ranges
 */
router.get('/products/price-ranges', async (req, res) => {
  try {
    const collection = await getCollection('products')
    const stats = await collection
      .aggregate([
        {
          $bucket: {
            groupBy: '$price',
            boundaries: [0, 50, 100, 200, 500, 1000],
            default: '1000+',
            output: {
              count: { $sum: 1 },
              products: { $push: { name: '$name', price: '$price' } }
            }
          }
        }
      ])
      .toArray()

    res.status(200).json({
      message: 'Product distribution by price ranges',
      stats
    })
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Failed to get price range statistics', details: error })
  }
})

export default router
