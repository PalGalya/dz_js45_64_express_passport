import 'dotenv/config'
import express from 'express'
import session from 'express-session'
import passport from './auth/passport.mjs'
import router from './routes/index.mjs'
import { errors } from 'celebrate'
import { connectToDatabase, closeDatabase } from './db/mongodb.mjs'
import { seedProducts } from './controllers/products.mjs'
import { initTestUsers } from './utils/initUsers.mjs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PORT = process.env.PORT || 3000
const app = express()

// Налаштування сесій
const sessionOptions = {
  secret: process.env.SESSION_SECRET || 'your-secret-key-change-in-production',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // встановити true для HTTPS
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 години
  }
}

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Статичні файли
app.use(express.static(path.join(__dirname, '../public')))

app.use(session(sessionOptions))
app.use(passport.initialize())
app.use(passport.session())

// Маршрути
app.use(router)

// Обробка помилок валідації
app.use(errors())

// Загальний обробник помилок
app.use((err, req, res, next) => {
  if (!res.headersSent) {
    res.status(err.status || 500).json({
      status: 'error',
      message: err.message || 'Internal Server Error'
    })
  }
})

// Підключення до MongoDB та запуск сервера
async function startServer() {
  try {
    // Підключення до MongoDB
    await connectToDatabase()

    // Ініціалізація тестових даних
    await seedProducts()
    await initTestUsers()

    // Запуск сервера
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`)
      console.log(`📄 Products page: http://localhost:${PORT}/products.html`)
    })
  } catch (error) {
    console.error('Failed to start server:', error)
    process.exit(1)
  }
}

// Обробка закриття сервера
process.on('SIGINT', async () => {
  console.log('\n⏹️  Shutting down gracefully...')
  await closeDatabase()
  process.exit(0)
})

process.on('SIGTERM', async () => {
  console.log('\n⏹️  Shutting down gracefully...')
  await closeDatabase()
  process.exit(0)
})

startServer()
