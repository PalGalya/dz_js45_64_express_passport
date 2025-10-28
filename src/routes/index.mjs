import { Router } from 'express'
import authRouter from './auth.mjs'
import productsRouter from './products.mjs'
import cursorRoutes from './cursor.mjs'
import aggregationRoutes from './aggregation.mjs'

const router = Router()

router.use('/auth', authRouter)
router.use('/api/products', productsRouter)
router.use('/api/cursor', cursorRoutes)
router.use('/api/aggregation', aggregationRoutes)

export default router
