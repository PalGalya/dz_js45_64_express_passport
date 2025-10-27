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

| Метод  | Маршрут               | Опис                                |
| ------ | --------------------- | ----------------------------------- | --- |
| POST   | `/auth/register`      | Реєстрація нового користувача       |
| POST   | `/auth/login`         | Вхід в систему                      |
| POST   | `/auth/logout`        | Вихід з системи                     |
| GET    | `/auth/me`            | Отримати інформацію про користувача | Так |
| GET    | `/auth/protected`     | Захищена сторінка (демонстрація)    | Так |
| GET    | `/api/products`       | Отримати список продуктів           | Ні  |
| POST   | `/insertOne`          | Додавання одного документа          |
| POST   | `/insertMany`         | Додавання багатьох документів       |
| PUT    | `/updateOne`          | Оновлення одного документа          |
| PUT    | `/updateMany`         | Оновлення багатьох документів       |
| PUT    | `/replaceOne`         | Заміна одного документа             |
| DELETE | `/deleteOne`          | Видалення одного документа          |
| DELETE | `/deleteMany`         | Видалення багатьох документів       |
| GET    | `/findWithProjection` | Читання даних з проекцією           |

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

**Додавання одного документа:**

```bash
curl -X POST http://localhost:3000/insertOne \
  -H "Content-Type: application/json" \
  -d '{"name":"Product1","price":100}'
```

**Додавання багатьох документів:**

```bash
curl -X POST http://localhost:3000/insertMany \
  -H "Content-Type: application/json" \
  -d '[{"name":"Product1","price":100},{"name":"Product2","price":200}]'
```

**Оновлення одного документа:**

```bash
curl -X PUT http://localhost:3000/updateOne \
  -H "Content-Type: application/json" \
  -d '{"filter":{"name":"Product1"},"update":{"$set":{"price":150}}}'
```

**Оновлення багатьох документів:**

```bash
curl -X PUT http://localhost:3000/updateMany \
  -H "Content-Type: application/json" \
  -d '{"filter":{"price":{"$lt":200}},"update":{"$set":{"price":200}}}'
```

**Заміна одного документа:**

```bash
curl -X PUT http://localhost:3000/replaceOne \
  -H "Content-Type: application/json" \
  -d '{"filter":{"name":"Product1"},"replacement":{"name":"Product1","price":300}}'
```

**Видалення одного документа:**

```bash
curl -X DELETE http://localhost:3000/deleteOne \
  -H "Content-Type: application/json" \
  -d '{"filter":{"name":"Product1"}}'
```

**Видалення багатьох документів:**

```bash
curl -X DELETE http://localhost:3000/deleteMany \
  -H "Content-Type: application/json" \
  -d '{"filter":{"price":{"$lt":200}}}'
```

**Читання даних з проекцією:**

```bash
curl -X GET http://localhost:3000/findWithProjection \
  -H "Content-Type: application/json" \
  -d '{"filter":{},"projection":{"name":1}}'
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
│   ├── config.mjs                # Завантаження конфігурації з .env
│   └── views/
│       └── products.html         # Відображення даних продуктів
├── .env                          # Файл конфігурації середовища
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
- **Файл config.mjs** для завантаження конфігурації з `.env`

## 📦 Залежності

- `express` - веб-фреймворк
- `passport` - бібліотека авторизації
- `passport-local` - стратегія локальної авторизації
- `express-session` - управління сесіями
- `celebrate` + `joi` - валідація даних
- `mongodb` - драйвер для роботи з MongoDB
- `dotenv` - завантаження змінних оточення

## ⚠️ Примітка

Це навчальний проект. Паролі зберігаються у відкритому вигляді. У продакшені обов'язково використовуйте:

- Хешування паролів (bcrypt, argon2)
- Базу даних для користувачів
- Безпечні змінні оточення
- HTTPS для secure cookies
