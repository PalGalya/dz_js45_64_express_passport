/**
 * Middleware для перевірки, чи користувач авторизований
 */
export const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  }

  res.status(401).json({
    status: 'error',
    message: 'Необхідна авторизація для доступу до цього ресурсу'
  })
}

// Alias для зворотної сумісності
export const requireAuth = isAuthenticated
