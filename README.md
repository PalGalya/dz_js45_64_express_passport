# Express Server з Passport авторизацією

**Домашнє завдання 64.1:** Оновлення сервера Express з використанням Passport для авторизації.

**Домашнє завдання 65:** Інтеграція MongoDB Atlas з існуючим сервером Express.

**Домашнє завдання 67.1:** Використання курсорів та агрегаційних запитів у MongoDB через сервер Express.

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

| Метод  | Маршрут                                  | Опис                                             | Авторизація |
| ------ | ---------------------------------------- | ------------------------------------------------ | ----------- |
| POST   | `/auth/register`                         | Реєстрація нового користувача                    | Ні          |
| POST   | `/auth/login`                            | Вхід в систему                                   | Ні          |
| POST   | `/auth/logout`                           | Вихід з системи                                  | Так         |
| GET    | `/auth/me`                               | Отримати інформацію про користувача              | Так         |
| GET    | `/auth/protected`                        | Захищена сторінка (демонстрація)                 | Так         |
| GET    | `/api/products`                          | Отримати список продуктів                        | Ні          |
| GET    | `/api/products/:id`                      | Отримати продукт за ID                           | Ні          |
| POST   | `/api/products`                          | Створити новий продукт                           | Так         |
| POST   | `/api/products/insertOne`                | Додавання одного документа                       | Так         |
| POST   | `/api/products/insertMany`               | Додавання багатьох документів                    | Так         |
| PUT    | `/api/products/updateOne`                | Оновлення одного документа                       | Так         |
| PUT    | `/api/products/updateMany`               | Оновлення багатьох документів                    | Так         |
| PUT    | `/api/products/replaceOne`               | Заміна одного документа                          | Так         |
| DELETE | `/api/products/deleteOne`                | Видалення одного документа                       | Так         |
| DELETE | `/api/products/deleteMany`               | Видалення багатьох документів                    | Так         |
| POST   | `/api/products/findWithProjection`       | Читання даних з проекцією                        | Так         |
| GET    | `/api/cursor/products`                   | Обробка продуктів за допомогою курсора (forEach) | Ні          |
| GET    | `/api/cursor/products/batch`             | Обробка продуктів курсором з батчингом           | Ні          |
| GET    | `/api/cursor/products/stream`            | Обробка продуктів курсором потоково              | Ні          |
| GET    | `/api/aggregation/products/stats`        | Загальна статистика продуктів (агрегація)        | Ні          |
| GET    | `/api/aggregation/products/by-category`  | Статистика продуктів за категоріями              | Ні          |
| GET    | `/api/aggregation/products/price-ranges` | Розподіл продуктів за ціновими діапазонами       | Ні          |

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
curl -X POST http://localhost:3000/api/products/insertOne \
  -H "Content-Type: application/json" \
  -d '{"name":"Product1","price":100,"description":"Description","category":"Category"}'
```

**Додавання багатьох документів:**

```bash
curl -X POST http://localhost:3000/api/products/insertMany \
  -H "Content-Type: application/json" \
  -d '[{"name":"Product1","price":100,"description":"Description 1","category":"Category 1"},{"name":"Product2","price":200,"description":"Description 2","category":"Category 2"}]'
```

**Оновлення одного документа:**

```bash
curl -X PUT http://localhost:3000/api/products/updateOne \
  -H "Content-Type: application/json" \
  -d '{"filter":{"name":"Product1"},"update":{"$set":{"price":150}}}'
```

**Оновлення багатьох документів:**

```bash
curl -X PUT http://localhost:3000/api/products/updateMany \
  -H "Content-Type: application/json" \
  -d '{"filter":{"price":{"$lt":200}},"update":{"$set":{"price":200}}}'
```

**Заміна одного документа:**

```bash
curl -X PUT http://localhost:3000/api/products/replaceOne \
  -H "Content-Type: application/json" \
  -d '{"filter":{"name":"Product1"},"replacement":{"name":"Product1","price":300,"description":"New description","category":"Category"}}'
```

**Видалення одного документа:**

```bash
curl -X DELETE http://localhost:3000/api/products/deleteOne \
  -H "Content-Type: application/json" \
  -d '{"filter":{"name":"Product1"}}'
```

**Видалення багатьох документів:**

```bash
curl -X DELETE http://localhost:3000/api/products/deleteMany \
  -H "Content-Type: application/json" \
  -d '{"filter":{"price":{"$lt":200}}}'
```

**Читання даних з проекцією:**

```bash
curl -X POST http://localhost:3000/api/products/findWithProjection \
  -H "Content-Type: application/json" \
  -d '{"filter":{},"projection":{"name":1,"price":1,"_id":0}}'
```

**Обробка продуктів за допомогою курсора (forEach):**

```bash
curl -X GET http://localhost:3000/api/cursor/products
```

**Обробка продуктів курсором з батчингом:**

```bash
curl -X GET http://localhost:3000/api/cursor/products/batch?batchSize=3
```

**Потокова обробка продуктів курсором:**

```bash
curl -X GET http://localhost:3000/api/cursor/products/stream
```

**Загальна статистика продуктів:**

```bash
curl -X GET http://localhost:3000/api/aggregation/products/stats
```

**Статистика продуктів за категоріями:**

```bash
curl -X GET http://localhost:3000/api/aggregation/products/by-category
```

**Розподіл продуктів за ціновими діапазонами:**

```bash
curl -X GET http://localhost:3000/api/aggregation/products/price-ranges
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
│   │   ├── auth.mjs              # Контролери авторизації
│   │   └── products.mjs          # Контролери продуктів
│   ├── middleware/
│   │   └── auth.mjs              # Middleware перевірки авторизації
│   ├── routes/
│   │   ├── auth.mjs              # Маршрути авторизації
│   │   ├── index.mjs             # Головний роутер
│   │   ├── products.mjs          # Маршрути для роботи з продуктами
│   │   ├── cursor.mjs            # Маршрути для обробки документів за допомогою курсорів
│   │   └── aggregation.mjs       # Маршрути для агрегаційних запитів
│   ├── db/
│   │   └── mongodb.mjs           # Підключення до MongoDB Atlas
│   └── config.mjs                # Завантаження конфігурації з .env
├── public/
│   └── products.html             # Відображення даних продуктів
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
- **Курсори MongoDB** для ефективної обробки великих наборів даних
- **Агрегаційні запити** для збору статистичних даних (середнє значення, сума, кількість унікальних значень)
- **Батчинг** та **потокова обробка** документів за допомогою курсорів
- **Статистика за категоріями** та **ціновими діапазонами** через агрегацію

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
