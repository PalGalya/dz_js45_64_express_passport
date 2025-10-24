import express from 'express'
import session from 'express-session'
import passport from './auth/passport.mjs'
import router from './routes/index.mjs'
import { errors } from 'celebrate'

const PORT = 3000
const app = express()

// Налаштування сесій
const sessionOptions = {
  secret: 'your-secret-key-change-in-production',
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

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
