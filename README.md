# Express Server з Passport авторізацією та MongoDB Atlas# Express Server з Passport авторизацією

**Домашнє завдання 64.1:** Оновлення сервера Express з використанням Passport для авторизації. **Домашнє завдання 64.1:** Оновлення сервера Express з використанням Passport для авторизації.

**Домашнє завдання 65.1:** Інтеграція MongoDB Atlas з існуючим сервером Express.

## 📋 Технічні завдання

## 📋 Технічні завдання

### 1. Технології

### 1. Технології

- Node.js та Express.js

- Node.js та Express.js

- MongoDB Atlas (хмарна база даних)### 2. Використання Passport для авторизації

- Passport.js для авторизації

- ✅ Інтеграція бібліотеки Passport для обробки авторизації користувачів

### 2. Використання Passport для авторизації- ✅ Конфігурація стратегії Passport (LocalStrategy) з використанням email та пароля

- ✅ Створення маршрутів для реєстрації, входу та виходу користувачів

- ✅ Інтеграція бібліотеки Passport для обробки авторизації користувачів

- ✅ Конфігурація стратегії Passport (LocalStrategy) з використанням email та пароля### 3. Збереження сесій

- ✅ Створення маршрутів для реєстрації, входу та виходу користувачів

- ✅ Налаштування Express сесій (`express-session`) для збереження стану авторизації

### 3. Збереження сесій- ✅ Інтеграція сесій для тривалої авторизації

- ✅ Збереження ідентифікатора сесії у cookies з `httpOnly` та `secure`

- ✅ Налаштування Express сесій (`express-session`) для збереження стану авторизації

- ✅ Інтеграція сесій для тривалої авторизації### 4. Доступ до захищеного маршруту

- ✅ Збереження ідентифікатора сесії у cookies з `httpOnly` та `secure`

- ✅ Забезпечення доступу до захищеного маршруту `/auth/protected`

### 4. Доступ до захищеного маршруту- ✅ Middleware Passport для перевірки наявності та валідності сесії

- ✅ Забезпечення доступу до захищеного маршруту `/auth/protected`## 🚀 Встановлення та запуск

- ✅ Middleware Passport для перевірки наявності та валідності сесії

`````bash

### 5. Інтеграція MongoDB Atlas# Встановити залежності

npm install

- ✅ Підключення до MongoDB Atlas за допомогою офіційного MongoDB Node.js Driver

- ✅ Створення колекції `products` для зберігання даних про продукти# Запустити сервер

- ✅ Реалізація операцій читання даних з MongoDBnpm start

- ✅ Автоматична ініціалізація тестових даних (seed)

- ✅ Веб-сторінка для відображення даних з бази даних# Запустити в режимі розробки

npm run dev

## 🚀 Встановлення та запуск```



### Крок 1: Встановити залежностіСервер буде доступний на `http://localhost:3000`



```bash## 📡 API Endpoints

npm install

```| Метод | Маршрут           | Опис                                | Авторизація |

| ----- | ----------------- | ----------------------------------- | ----------- |

### Крок 2: Налаштувати MongoDB Atlas| POST  | `/auth/register`  | Реєстрація нового користувача       | Ні          |

| POST  | `/auth/login`     | Вхід в систему                      | Ні          |

1. Створіть обліковий запис на [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)| POST  | `/auth/logout`    | Вихід з системи                     | Так         |

2. Створіть новий кластер (безкоштовний tier доступний)| GET   | `/auth/me`        | Отримати інформацію про користувача | Так         |

3. Створіть користувача бази даних| GET   | `/auth/protected` | Захищена сторінка (демонстрація)    | Так         |

4. Додайте IP-адресу до whitelist (або 0.0.0.0/0 для тестування)

5. Отримайте connection string### Приклади запитів



### Крок 3: Створити файл `.env`**Реєстрація нового користувача:**



Створіть файл `.env` у корені проекту (використовуйте `.env.example` як шаблон):```bash

curl -X POST http://localhost:3000/auth/register \

```env  -H "Content-Type: application/json" \

# MongoDB Atlas Connection  -d '{"email":"newuser@example.com","password":"password123"}'

MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority```



# Session Secret**Вхід в систему:**

SESSION_SECRET=your-secret-key-here

```bash

# Server Configurationcurl -X POST http://localhost:3000/auth/login \

PORT=3000  -H "Content-Type: application/json" \

```  -d '{"email":"admin@example.com","password":"password123"}' \

  -c cookies.txt

### Крок 4: Запустити сервер```



```bash**Отримання інформації про поточного користувача:**

# Звичайний режим

npm start```bash

curl -X GET http://localhost:3000/auth/me -b cookies.txt

# Режим розробки з auto-reload```

npm run dev

```**Доступ до захищеної сторінки:**



Сервер буде доступний на `http://localhost:3000````bash

curl -X GET http://localhost:3000/auth/protected -b cookies.txt

## 📡 API Endpoints```



### Авторизація**Вихід:**



| Метод | Маршрут           | Опис                                | Авторизація |```bash

| ----- | ----------------- | ----------------------------------- | ----------- |curl -X POST http://localhost:3000/auth/logout -b cookies.txt

| POST  | `/auth/register`  | Реєстрація нового користувача       | Ні          |```

| POST  | `/auth/login`     | Вхід в систему                      | Ні          |

| POST  | `/auth/logout`    | Вихід з системи                     | Так         |## 👥 Тестові користувачі

| GET   | `/auth/me`        | Отримати інформацію про користувача | Так         |

| GET   | `/auth/protected` | Захищена сторінка (демонстрація)    | Так         |1. **Admin:**



### MongoDB продукти   - Email: `admin@example.com`

   - Password: `password123`

| Метод | Маршрут               | Опис                      | Авторизація |

| ----- | --------------------- | ------------------------- | ----------- |2. **User:**

| GET   | `/api/products`       | Отримати всі продукти     | Ні          |   - Email: `user@example.com`

| GET   | `/api/products/:id`   | Отримати продукт за ID    | Ні          |   - Password: `userpass`

| POST  | `/api/products`       | Створити новий продукт    | Ні          |

| GET   | `/products.html`      | Веб-сторінка з продуктами | Ні          |## 📁 Структура проекту



### Приклади запитів```

dz_js45_64_express_passport/

**Реєстрація нового користувача:**├── src/

│   ├── app.mjs                   # Головний файл додатку

```bash│   ├── auth/

curl -X POST http://localhost:3000/auth/register \│   │   └── passport.mjs          # Конфігурація Passport (LocalStrategy)

  -H "Content-Type: application/json" \│   ├── controllers/

  -d '{"email":"newuser@example.com","password":"password123"}'│   │   └── auth.mjs              # Контролери авторизації

```│   ├── middleware/

│   │   └── auth.mjs              # Middleware перевірки авторизації

**Вхід в систему:**│   └── routes/

│       ├── auth.mjs              # Маршрути авторизації

```bash│       └── index.mjs             # Головний роутер

curl -X POST http://localhost:3000/auth/login \├── package.json

  -H "Content-Type: application/json" \└── README.md

  -d '{"email":"admin@example.com","password":"password123"}' \```

  -c cookies.txt

```## 🔐 Реалізовані функції



**Отримати всі продукти з MongoDB:**- **Passport.js** з LocalStrategy для локальної авторизації через email та пароль

- **Реєстрація користувачів** з перевіркою на унікальність email

```bash- **Express-session** для збереження сесій

curl -X GET http://localhost:3000/api/products- **Cookies** з httpOnly для безпеки

```- **Middleware** для захисту маршрутів

- **Валідація** даних (email та пароль) з Joi та Celebrate

**Отримати продукт за ID:**- **Серіалізація/десеріалізація** користувачів у сесії

- **Динамічне додавання користувачів** - зареєстровані користувачі зберігаються та можуть авторизуватися

```bash

curl -X GET http://localhost:3000/api/products/1## 📦 Залежності

`````

- `express` - веб-фреймворк

**Створити новий продукт:**- `passport` - бібліотека авторизації

- `passport-local` - стратегія локальної авторизації

```bash- `express-session` - управління сесіями

curl -X POST http://localhost:3000/api/products \- `celebrate` + `joi` - валідація даних

-H "Content-Type: application/json" \

-d '{## ⚠️ Примітка

    "name": "Нова мишка",

    "price": 1200,Це навчальний проект. Паролі зберігаються у відкритому вигляді. У продакшені обов'язково використовуйте:

    "description": "Бездротова ергономічна мишка для роботи",

    "category": "Аксесуари"- Хешування паролів (bcrypt, argon2)

}'- Базу даних для користувачів

````- Безпечні змінні оточення

- HTTPS для secure cookies

**Отримання інформації про поточного користувача:**

```bash
curl -X GET http://localhost:3000/auth/me -b cookies.txt
````

**Доступ до захищеної сторінки:**

```bash
curl -X GET http://localhost:3000/auth/protected -b cookies.txt
```

**Вихід:**

```bash
curl -X POST http://localhost:3000/auth/logout -b cookies.txt
```

## 🌐 Веб-інтерфейс

Відкрийте у браузері:

- **http://localhost:3000/products.html** - сторінка з каталогом продуктів з MongoDB

На цій сторінці ви побачите:

- Красивий каталог продуктів з MongoDB Atlas
- Автоматичне завантаження даних через REST API
- Лічильник продуктів
- Можливість оновлення даних
- Адаптивний дизайн

## 👥 Тестові дані

### Користувачі (для авторизації)

1. **Admin:**

   - Email: `admin@example.com`
   - Password: `password123`

2. **User:**
   - Email: `user@example.com`
   - Password: `userpass`

### Продукти (автоматично додаються в MongoDB)

При першому запуску сервер автоматично додасть 5 тестових продуктів:

- Ноутбук Dell XPS 13
- Смартфон iPhone 15 Pro
- Навушники Sony WH-1000XM5
- Клавіатура Logitech MX Keys
- Монітор LG UltraWide 34"

## 📁 Структура проекту

```
dz_js45_64_express_passport/
├── src/
│   ├── app.mjs                   # Головний файл додатку
│   ├── auth/
│   │   └── passport.mjs          # Конфігурація Passport (LocalStrategy)
│   ├── controllers/
│   │   ├── auth.mjs              # Контролери авторизації
│   │   └── products.mjs          # Контролери для роботи з MongoDB
│   ├── db/
│   │   └── mongodb.mjs           # Підключення та робота з MongoDB Atlas
│   ├── middleware/
│   │   └── auth.mjs              # Middleware перевірки авторизації
│   └── routes/
│       ├── auth.mjs              # Маршрути авторізації
│       ├── products.mjs          # Маршрути для продуктів (MongoDB)
│       └── index.mjs             # Головний роутер
├── public/
│   └── products.html             # Веб-сторінка для відображення продуктів
├── .env.example                  # Приклад файлу змінних оточення
├── .gitignore
├── package.json
└── README.md
```

## 🔐 Реалізовані функції

### Авторизація (ДЗ 64.1)

- **Passport.js** з LocalStrategy для локальної авторизації через email та пароль
- **Реєстрація користувачів** з перевіркою на унікальність email
- **Express-session** для збереження сесій
- **Cookies** з httpOnly для безпеки
- **Middleware** для захисту маршрутів
- **Валідація** даних (email та пароль) з Joi та Celebrate
- **Серіалізація/десеріалізація** користувачів у сесії
- **Динамічне додавання користувачів** - зареєстровані користувачі зберігаються та можуть авторизуватися

### MongoDB Integration (ДЗ 65.1)

- **Підключення до MongoDB Atlas** через офіційний драйвер

# dz_js45_64_express_passport — Passport + MongoDB Atlas integration

Коротко: навчальний проєкт на Express із локальною авторизацією через Passport (LocalStrategy) та інтеграцією MongoDB Atlas для зберігання/читання даних (колекція `products`).

Основні можливості

- Реєстрація / вхід / вихід користувачів (Passport + express-session)
- Захищений маршрут `/auth/protected`
- Підключення до MongoDB Atlas через офіційний драйвер `mongodb`
- REST API для продуктів: `GET /api/products`, `GET /api/products/:id`, `POST /api/products`
- Автоматичний seeding тестових продуктів при першому запуску
- Статична сторінка `public/products.html` для демонстрації отриманих даних

Швидкий старт

1. Встановіть залежності:

```bash
npm install
```

2. Створіть `.env` у корені (використайте `.env.example`):

```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/expressApp?retryWrites=true&w=majority
SESSION_SECRET=your-secret
PORT=3000
```

3. Запустіть сервер:

```bash
npm start
```

Після запуску:

- Сервер: http://localhost:3000
- Сторінка з продуктами: http://localhost:3000/products.html

Файлова структура (огляд)

```
src/
  ├─ app.mjs               # головний файл — підключення до БД, ініціалізація сервера
  ├─ auth/passport.mjs    # Passport config + тестові користувачі (масив `users`)
  ├─ controllers/
  │   ├─ auth.mjs         # register/login/logout/getCurrentUser
  │   └─ products.mjs     # робота з колекцією products, seed
  ├─ db/mongodb.mjs       # підключення до MongoDB (singleton)
  ├─ middleware/auth.mjs  # requireAuth
  └─ routes/              # auth + products
public/
  └─ products.html        # фронтенд для демонстрації продуктів
```

Зауваги до безпеки

- У цьому освітньому проєкті паролі зберігаються у відкритому вигляді — це робиться навмисно для простоти. У продакшн необхідно обов'язково використовувати хешування (bcrypt/argon2) і реальну базу для користувачів.
- Файл `.env` доданий у `.gitignore` — переконайтеся, що ви не пушите реальний connection string у репозиторій.

Якщо хочете, я відправлю чистий коміт з цими змінами та видалю локальні скриншоти із репозиторію. Також можу виправити README ще детальніше під ваші вимоги (мова/приклади curl тощо).
