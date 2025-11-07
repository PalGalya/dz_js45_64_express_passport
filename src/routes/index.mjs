import { Router } from 'express'
import authRouter from './auth.mjs'
import productsRouter from './products.mjs'

const router = Router()

router.use('/auth', authRouter)
router.use('/api/products', productsRouter)

export default router
