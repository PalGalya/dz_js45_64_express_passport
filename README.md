# Express Server з Passport авторизацією

**Домашнє завдання 64.1:** Оновлення сервера Express з використанням Passport для авторизації.

**Домашнє завдання 65:** Інтеграція MongoDB Atlas з існуючим сервером Express.

## 📋 Технічні завдання

### 1. Технології

- Node.js та Express.js
- MongoDB Atlas

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

### 5. Інтеграція MongoDB Atlas

- ✅ Налаштування підключення до бази даних MongoDB Atlas
- ✅ Створення маршруту для читання даних з MongoDB
- ✅ Відображення даних на клієнтській стороні

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
| GET   | `/api/products`   | Отримати список продуктів           | Ні          |

### Приклади запитів

**Реєстрація нового користувача:**

```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"newuser@example.com","password":"password123"}'
```

**Вхід в систему:**

```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"password123"}' \
  -c cookies.txt
```

**Отримання інформації про поточного користувача:**

```bash
curl -X GET http://localhost:3000/auth/me -b cookies.txt
```

**Доступ до захищеної сторінки:**

```bash
curl -X GET http://localhost:3000/auth/protected -b cookies.txt
```

**Отримання списку продуктів:**

```bash
curl -X GET http://localhost:3000/api/products
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
│   ├── routes/
│   │   ├── auth.mjs              # Маршрути авторизації
│   │   ├── index.mjs             # Головний роутер
│   │   └── products.mjs          # Маршрути для роботи з продуктами
│   ├── db/
│   │   └── mongodb.mjs           # Підключення до MongoDB Atlas
│   └── views/
│       └── products.html         # Відображення даних продуктів
├── package.json
└── README.md
```

## 🔐 Реалізовані функції

- **Passport.js** з LocalStrategy для локальної авторизації через email та пароль
- **Реєстрація користувачів** з перевіркою на унікальність email
- **Express-session** для збереження сесій
- **Cookies** з httpOnly для безпеки
- **Middleware** для захисту маршрутів
- **Валідація** даних (email та пароль) з Joi та Celebrate
- **Серіалізація/десеріалізація** користувачів у сесії
- **Динамічне додавання користувачів** - зареєстровані користувачі зберігаються та можуть авторизуватися
- **MongoDB Atlas** для зберігання даних продуктів
- **Маршрути для продуктів** з читанням даних з бази
- **Відображення продуктів** на клієнтській стороні

## 📦 Залежності

- `express` - веб-фреймворк
- `passport` - бібліотека авторизації
- `passport-local` - стратегія локальної авторизації
- `express-session` - управління сесіями
- `celebrate` + `joi` - валідація даних
- `mongodb` - драйвер для роботи з MongoDB

## ⚠️ Примітка

Це навчальний проект. Паролі зберігаються у відкритому вигляді. У продакшені обов'язково використовуйте:

- Хешування паролів (bcrypt, argon2)
- Базу даних для користувачів
- Безпечні змінні оточення
- HTTPS для secure cookies
