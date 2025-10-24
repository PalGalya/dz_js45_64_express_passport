# Express Server з Passport авторизацією

**Домашнє завдання 64.1:** Оновлення сервера Express з використанням Passport для авторизації.

## 📋 Технічні завдання

### 1. Технології

- Node.js та Express.js

### 2. Використання Passport для авторизації

- ✅ Інтеграція бібліотеки Passport для обробки авторизації користувачів
- ✅ Конфігурація стратегії Passport (LocalStrategy) з використанням email та пароля
- ✅ Створення маршрутів для реєстрації, входу та виходу користувачів

### 3. Збереження сесій

- ✅ Налаштування Express сесій (`express-session`) для збереження стану авторизації
- ✅ Інтеграція сесій для тривалої авторизації
- ✅ Збереження ідентифікатора сесії у cookies з `httpOnly` та `secure`

### 4. Доступ до захищеного маршруту

- ✅ Забезпечення доступу до захищеного маршруту `/auth/protected`
- ✅ Middleware Passport для перевірки наявності та валідності сесії

## 🚀 Встановлення та запуск

```bash
# Встановити залежності
npm install

# Запустити сервер
npm start

# Запустити в режимі розробки
npm run dev
```

Сервер буде доступний на `http://localhost:3000`

## 📡 API Endpoints

| Метод | Маршрут           | Опис                                | Авторизація |
| ----- | ----------------- | ----------------------------------- | ----------- |
| POST  | `/auth/register`  | Реєстрація нового користувача       | Ні          |
| POST  | `/auth/login`     | Вхід в систему                      | Ні          |
| POST  | `/auth/logout`    | Вихід з системи                     | Так         |
| GET   | `/auth/me`        | Отримати інформацію про користувача | Так         |
| GET   | `/auth/protected` | Захищена сторінка (демонстрація)    | Так         |

### Приклади запитів

**Вхід в систему:**

```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"password123"}' \
  -c cookies.txt
```

**Доступ до захищеної сторінки:**

```bash
curl -X GET http://localhost:3000/auth/protected -b cookies.txt
```

**Вихід:**

```bash
curl -X POST http://localhost:3000/auth/logout -b cookies.txt
```

## 👥 Тестові користувачі

1. **Admin:**

   - Email: `admin@example.com`
   - Password: `password123`

2. **User:**
   - Email: `user@example.com`
   - Password: `userpass`

## 📁 Структура проекту

```
dz_js45_64_express_passport/
├── src/
│   ├── app.mjs                   # Головний файл додатку
│   ├── auth/
│   │   └── passport.mjs          # Конфігурація Passport (LocalStrategy)
│   ├── controllers/
│   │   └── auth.mjs              # Контролери авторизації
│   ├── middleware/
│   │   └── auth.mjs              # Middleware перевірки авторизації
│   └── routes/
│       ├── auth.mjs              # Маршрути авторизації
│       └── index.mjs             # Головний роутер
├── package.json
└── README.md
```

## 🔐 Реалізовані функції

- **Passport.js** з LocalStrategy для локальної авторизації
- **Express-session** для збереження сесій
- **Cookies** з httpOnly для безпеки
- **Middleware** для захисту маршрутів
- **Валідація** даних (email та пароль) з Joi та Celebrate
- **Серіалізація/десеріалізація** користувачів у сесії

## 📦 Залежності

- `express` - веб-фреймворк
- `passport` - бібліотека авторизації
- `passport-local` - стратегія локальної авторизації
- `express-session` - управління сесіями
- `celebrate` + `joi` - валідація даних

## ⚠️ Примітка

Це навчальний проект. Паролі зберігаються у відкритому вигляді. У продакшені обов'язково використовуйте:

- Хешування паролів (bcrypt, argon2)
- Базу даних для користувачів
- Безпечні змінні оточення
- HTTPS для secure cookies
