import { Router } from 'express'
import authRouter from './auth.mjs'
import productsRouter from './products.mjs'
import cursorRouter from './cursor.mjs'
import aggregationRouter from './aggregation.mjs'

const router = Router()

router.use('/auth', authRouter)
router.use('/api/products', productsRouter)
router.use('/api/cursor', cursorRouter)
router.use('/api/aggregation', aggregationRouter)

export default router
