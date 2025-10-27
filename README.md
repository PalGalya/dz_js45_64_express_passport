# Express Server з Passport авторизацією та MongoDB Atlas# Express Server з Passport авторізацією та MongoDB Atlas# Express Server з Passport авторизацією

**Домашнє завдання 64.1:** Оновлення сервера Express з використанням Passport для авторизації. **Домашнє завдання 64.1:** Оновлення сервера Express з використанням Passport для авторизації. **Домашнє завдання 64.1:** Оновлення сервера Express з використанням Passport для авторизації.

**Домашнє завдання 65.1:** Інтеграція MongoDB Atlas з існуючим сервером Express.

**Домашнє завдання 65.1:** Інтеграція MongoDB Atlas з існуючим сервером Express.

## 📋 Опис проєкту

## 📋 Технічні завдання

Це навчальний проєкт, який демонструє інтеграцію Express сервера з:

- **Passport.js** для локальної авторизації (LocalStrategy)## 📋 Технічні завдання

- **MongoDB Atlas** для зберігання та читання даних

- **Express Session** для управління сесіями користувачів### 1. Технології

- **Celebrate + Joi** для валідації даних

### 1. Технології

## ✅ Виконані вимоги

- Node.js та Express.js

### 1. Технології

- ✅ Node.js та Express.js- Node.js та Express.js

- ✅ MongoDB Atlas (хмарна база даних)

- ✅ Passport.js для авторизації- MongoDB Atlas (хмарна база даних)### 2. Використання Passport для авторизації

### 2. Підключення MongoDB Atlas- Passport.js для авторизації

- ✅ Використано офіційний MongoDB Node.js Driver

- ✅ Налаштовано з'єднання з базою даних у Atlas- ✅ Інтеграція бібліотеки Passport для обробки авторизації користувачів

- ✅ Реалізовано singleton pattern для підключення

- ✅ Graceful shutdown при зупинці сервера### 2. Використання Passport для авторизації- ✅ Конфігурація стратегії Passport (LocalStrategy) з використанням email та пароля

### 3. Операція читання даних- ✅ Створення маршрутів для реєстрації, входу та виходу користувачів

- ✅ Створено маршрути для отримання даних з MongoDB

- ✅ Реалізовано логіку запиту даних з колекції `products`- ✅ Інтеграція бібліотеки Passport для обробки авторизації користувачів

- ✅ Передача даних на клієнтську сторону через REST API

- ✅ Веб-сторінка для відображення даних- ✅ Конфігурація стратегії Passport (LocalStrategy) з використанням email та пароля### 3. Збереження сесій

### 4. Авторизація (попереднє ДЗ)- ✅ Створення маршрутів для реєстрації, входу та виходу користувачів

- ✅ LocalStrategy через email та пароль

- ✅ Реєстрація, вхід, вихід користувачів- ✅ Налаштування Express сесій (`express-session`) для збереження стану авторизації

- ✅ Захищені маршрути з middleware

- ✅ Серіалізація/десеріалізація користувачів### 3. Збереження сесій- ✅ Інтеграція сесій для тривалої авторизації

## 🚀 Встановлення та запуск- ✅ Збереження ідентифікатора сесії у cookies з `httpOnly` та `secure`

### Крок 1: Клонування репозиторію- ✅ Налаштування Express сесій (`express-session`) для збереження стану авторизації

```````bash- ✅ Інтеграція сесій для тривалої авторизації### 4. Доступ до захищеного маршруту

git clone https://github.com/PalGalya/dz_js45_64_express_passport.git

cd dz_js45_64_express_passport- ✅ Збереження ідентифікатора сесії у cookies з `httpOnly` та `secure`

git checkout dz_js46_65_mongo_express_integration

```- ✅ Забезпечення доступу до захищеного маршруту `/auth/protected`



### Крок 2: Встановлення залежностей### 4. Доступ до захищеного маршруту- ✅ Middleware Passport для перевірки наявності та валідності сесії



```bash- ✅ Забезпечення доступу до захищеного маршруту `/auth/protected`## 🚀 Встановлення та запуск

npm install

```- ✅ Middleware Passport для перевірки наявності та валідності сесії



### Крок 3: Налаштування MongoDB Atlas`````bash



Детальна інструкція знаходиться у файлі [MONGODB_SETUP.md](./MONGODB_SETUP.md).### 5. Інтеграція MongoDB Atlas# Встановити залежності



Коротко:npm install

1. Створіть обліковий запис на [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

2. Створіть безкоштовний кластер (M0 tier)- ✅ Підключення до MongoDB Atlas за допомогою офіційного MongoDB Node.js Driver

3. Налаштуйте Database User та Network Access

4. Отримайте connection string- ✅ Створення колекції `products` для зберігання даних про продукти# Запустити сервер



### Крок 4: Налаштування змінних оточення- ✅ Реалізація операцій читання даних з MongoDBnpm start



Створіть файл `.env` у корені проекту (використайте `.env.example` як шаблон):- ✅ Автоматична ініціалізація тестових даних (seed)



```env- ✅ Веб-сторінка для відображення даних з бази даних# Запустити в режимі розробки

MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/expressApp?retryWrites=true&w=majority

SESSION_SECRET=your-secret-key-herenpm run dev

PORT=3000

```## 🚀 Встановлення та запуск```



**Важливо:** Замініть `<username>`, `<password>` та `<cluster>` на ваші дані з MongoDB Atlas.



### Крок 5: Запуск сервера### Крок 1: Встановити залежностіСервер буде доступний на `http://localhost:3000`



```bash

# Звичайний режим

npm start```bash## 📡 API Endpoints



# Режим розробки з auto-reloadnpm install

npm run dev

``````| Метод | Маршрут           | Опис                                | Авторизація |



Після успішного запуску ви побачите:| ----- | ----------------- | ----------------------------------- | ----------- |

```````

✅ Successfully connected to MongoDB Atlas### Крок 2: Налаштувати MongoDB Atlas| POST | `/auth/register` | Реєстрація нового користувача | Ні |

✅ Sample products added to database

🚀 Server is running on port 3000| POST | `/auth/login` | Вхід в систему | Ні |

📄 Products page: http://localhost:3000/products.html

```1. Створіть обліковий запис на [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)| POST  | `/auth/logout` | Вихід з системи | Так |

## 📡 API Endpoints2. Створіть новий кластер (безкоштовний tier доступний)| GET | `/auth/me` | Отримати інформацію про користувача | Так |

### Авторизація3. Створіть користувача бази даних| GET | `/auth/protected` | Захищена сторінка (демонстрація) | Так |

| Метод | Маршрут | Опис | Авторизація |4. Додайте IP-адресу до whitelist (або 0.0.0.0/0 для тестування)

|-------|-------------------|-------------------------------|-------------|

| POST | `/auth/register` | Реєстрація нового користувача | Ні |5. Отримайте connection string### Приклади запитів

| POST | `/auth/login` | Вхід в систему | Ні |

| POST | `/auth/logout` | Вихід з системи | Так |

| GET | `/auth/me` | Інформація про користувача | Так |

| GET | `/auth/protected` | Захищена сторінка | Так |### Крок 3: Створити файл `.env`**Реєстрація нового користувача:**

### MongoDB продукти

| Метод | Маршрут | Опис | Авторизація |Створіть файл `.env` у корені проекту (використовуйте `.env.example` як шаблон):```bash

|-------|---------------------|------------------------|-------------|

| GET | `/api/products` | Отримати всі продукти | Ні |curl -X POST http://localhost:3000/auth/register \

| GET | `/api/products/:id` | Отримати продукт за ID | Ні |

| POST | `/api/products` | Створити новий продукт | Ні |```env -H "Content-Type: application/json" \

### Статичні сторінки# MongoDB Atlas Connection -d '{"email":"newuser@example.com","password":"password123"}'

| Маршрут | Опис |MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority```

|-------------------|-------------------------------|

| `/products.html` | Веб-сторінка з продуктами |

## 💻 Приклади використання# Session Secret**Вхід в систему:**

### Реєстрація користувачаSESSION_SECRET=your-secret-key-here

`bash`bash

curl -X POST http://localhost:3000/auth/register \

-H "Content-Type: application/json" \# Server Configurationcurl -X POST http://localhost:3000/auth/login \

-d '{"email":"test@example.com","password":"password123"}'

````PORT=3000 -H "Content-Type: application/json" \



### Вхід в систему```  -d '{"email":"admin@example.com","password":"password123"}' \



```bash  -c cookies.txt

curl -X POST http://localhost:3000/auth/login \

  -H "Content-Type: application/json" \### Крок 4: Запустити сервер```

  -d '{"email":"admin@example.com","password":"password123"}' \

  -c cookies.txt

````

````bash**Отримання інформації про поточного користувача:**

### Отримання всіх продуктів з MongoDB

# Звичайний режим

```bash

curl http://localhost:3000/api/productsnpm start```bash

````

curl -X GET http://localhost:3000/auth/me -b cookies.txt

**Відповідь:**

`json# Режим розробки з auto-reload`

{

"status": "success",npm run dev

"data": {

    "products": [```**Доступ до захищеної сторінки:**

      {

        "id": 1,

        "name": "Ноутбук Dell XPS 13",

        "price": 45000,Сервер буде доступний на `http://localhost:3000````bash

        "description": "Потужний ультрабук для роботи та розваг",

        "category": "Електроніка",curl -X GET http://localhost:3000/auth/protected -b cookies.txt

        "createdAt": "2025-10-27T..."

      }## 📡 API Endpoints```

    ],

    "count": 5

}

}### Авторизація**Вихід:**

````



### Створення нового продукту

| Метод | Маршрут           | Опис                                | Авторизація |```bash

```bash

curl -X POST http://localhost:3000/api/products \| ----- | ----------------- | ----------------------------------- | ----------- |curl -X POST http://localhost:3000/auth/logout -b cookies.txt

  -H "Content-Type: application/json" \

  -d '{| POST  | `/auth/register`  | Реєстрація нового користувача       | Ні          |```

    "name": "Бездротова мишка",

    "price": 1200,| POST  | `/auth/login`     | Вхід в систему                      | Ні          |

    "description": "Ергономічна мишка для роботи",

    "category": "Аксесуари"| POST  | `/auth/logout`    | Вихід з системи                     | Так         |## 👥 Тестові користувачі

  }'

```| GET   | `/auth/me`        | Отримати інформацію про користувача | Так         |



### Доступ до захищеної сторінки| GET   | `/auth/protected` | Захищена сторінка (демонстрація)    | Так         |1. **Admin:**



```bash

curl http://localhost:3000/auth/protected -b cookies.txt

```### MongoDB продукти   - Email: `admin@example.com`



## 🌐 Веб-інтерфейс   - Password: `password123`



Відкрийте у браузері: **http://localhost:3000/products.html**| Метод | Маршрут               | Опис                      | Авторизація |



На цій сторінці ви побачите:| ----- | --------------------- | ------------------------- | ----------- |2. **User:**

- 🛍️ Каталог продуктів з MongoDB Atlas

- 📊 Лічильник продуктів| GET   | `/api/products`       | Отримати всі продукти     | Ні          |   - Email: `user@example.com`

- 🔄 Кнопка оновлення даних

- 📱 Адаптивний дизайн| GET   | `/api/products/:id`   | Отримати продукт за ID    | Ні          |   - Password: `userpass`

- ⚡ Автоматичне завантаження через REST API

| POST  | `/api/products`       | Створити новий продукт    | Ні          |

## 📁 Структура проекту

| GET   | `/products.html`      | Веб-сторінка з продуктами | Ні          |## 📁 Структура проекту

````

dz_js45_64_express_passport/

├── src/

│ ├── app.mjs # Головний файл додатку### Приклади запитів```

│ ├── auth/

│ │ └── passport.mjs # Налаштування Passport LocalStrategydz_js45_64_express_passport/

│ ├── controllers/

│ │ ├── auth.mjs # Контролери авторизації**Реєстрація нового користувача:**├── src/

│ │ └── products.mjs # Контролери для роботи з MongoDB

│ ├── db/│ ├── app.mjs # Головний файл додатку

│ │ └── mongodb.mjs # Модуль підключення до MongoDB Atlas

│ ├── middleware/```bash│ ├── auth/

│ │ └── auth.mjs # Middleware перевірки авторизації

│ └── routes/curl -X POST http://localhost:3000/auth/register \│ │ └── passport.mjs # Конфігурація Passport (LocalStrategy)

│ ├── auth.mjs # Маршрути авторизації

│ ├── products.mjs # Маршрути для продуктів -H "Content-Type: application/json" \│ ├── controllers/

│ └── index.mjs # Головний роутер

├── public/ -d '{"email":"newuser@example.com","password":"password123"}'│ │ └── auth.mjs # Контролери авторизації

│ └── products.html # Веб-сторінка відображення продуктів

├── .env.example # Приклад змінних оточення```│ ├── middleware/

├── .gitignore # Git ignore файл

├── MONGODB_SETUP.md # Інструкція налаштування MongoDB Atlas│ │ └── auth.mjs # Middleware перевірки авторизації

├── package.json # Залежності проекту

└── README.md # Документація (цей файл)**Вхід в систему:**│ └── routes/

``````

│       ├── auth.mjs              # Маршрути авторизації

## 👥 Тестові дані

```bash│       └── index.mjs             # Головний роутер

### Користувачі (для авторизації)

curl -X POST http://localhost:3000/auth/login \├── package.json

1. **Admin**

   - Email: `admin@example.com`  -H "Content-Type: application/json" \└── README.md

   - Password: `password123`

  -d '{"email":"admin@example.com","password":"password123"}' \```

2. **User**

   - Email: `user@example.com`  -c cookies.txt

   - Password: `userpass`

```## 🔐 Реалізовані функції

### Продукти (автоматично додаються в MongoDB)



При першому запуску сервер автоматично додає 5 тестових продуктів:

1. Ноутбук Dell XPS 13 - 45,000 ₴**Отримати всі продукти з MongoDB:**- **Passport.js** з LocalStrategy для локальної авторизації через email та пароль

2. Смартфон iPhone 15 Pro - 52,000 ₴

3. Навушники Sony WH-1000XM5 - 12,000 ₴- **Реєстрація користувачів** з перевіркою на унікальність email

4. Клавіатура Logitech MX Keys - 4,500 ₴

5. Монітор LG UltraWide 34" - 18,000 ₴```bash- **Express-session** для збереження сесій



## 🔐 Реалізовані функціїcurl -X GET http://localhost:3000/api/products- **Cookies** з httpOnly для безпеки



### Авторизація (ДЗ 64.1)```- **Middleware** для захисту маршрутів

- ✅ Passport.js з LocalStrategy

- ✅ Реєстрація з перевіркою унікальності email- **Валідація** даних (email та пароль) з Joi та Celebrate

- ✅ Вхід/вихід користувачів

- ✅ Express Session з httpOnly cookies**Отримати продукт за ID:**- **Серіалізація/десеріалізація** користувачів у сесії

- ✅ Захищені маршрути через middleware

- ✅ Валідація даних (Joi + Celebrate)- **Динамічне додавання користувачів** - зареєстровані користувачі зберігаються та можуть авторизуватися

- ✅ Серіалізація користувачів у сесії

```bash

### MongoDB Integration (ДЗ 65.1)

- ✅ Підключення до MongoDB Atlas (офіційний драйвер)curl -X GET http://localhost:3000/api/products/1## 📦 Залежності

- ✅ CRUD операції з продуктами

- ✅ Автоматичний seeding даних`````

- ✅ REST API для читання даних

- ✅ Веб-сторінка для відображення даних- `express` - веб-фреймворк

- ✅ Обробка помилок підключення

- ✅ Graceful shutdown**Створити новий продукт:**- `passport` - бібліотека авторизації



## 📦 Залежності- `passport-local` - стратегія локальної авторизації



```json```bash- `express-session` - управління сесіями

{

  "dependencies": {curl -X POST http://localhost:3000/api/products \- `celebrate` + `joi` - валідація даних

    "express": "^5.1.0",

    "passport": "^0.7.0",-H "Content-Type: application/json" \

    "passport-local": "^1.0.0",

    "express-session": "^1.17.3",-d '{## ⚠️ Примітка

    "celebrate": "^15.0.3",

    "joi": "^18.0.1",    "name": "Нова мишка",

    "mongodb": "^6.x",

    "dotenv": "^16.x"    "price": 1200,Це навчальний проект. Паролі зберігаються у відкритому вигляді. У продакшені обов'язково використовуйте:

  },

  "devDependencies": {    "description": "Бездротова ергономічна мишка для роботи",

    "nodemon": "^3.1.9"

  }    "category": "Аксесуари"- Хешування паролів (bcrypt, argon2)

}

```}'- Базу даних для користувачів



## ⚠️ Важливі примітки````- Безпечні змінні оточення



### Безпека- HTTPS для secure cookies



**Це навчальний проект!** У реальному production середовищі обов'язково:**Отримання інформації про поточного користувача:**



- 🔐 **Хешуйте паролі** (використовуйте bcrypt або argon2)```bash

- 🗄️ **Зберігайте користувачів у БД** (зараз вони в пам'яті)curl -X GET http://localhost:3000/auth/me -b cookies.txt

- 🔑 **Використовуйте складні секрети** для сесій````

- 🌐 **Увімкніть HTTPS** для secure cookies

- 🛡️ **Обмежте IP-адреси** в MongoDB Atlas Network Access**Доступ до захищеної сторінки:**

- ⚡ **Додайте rate limiting** для захисту від атак

```bash

### Налаштування для викладачаcurl -X GET http://localhost:3000/auth/protected -b cookies.txt

``````

Файл `.env` НЕ включений у репозиторій (в `.gitignore`).

Використовуйте `.env.example` як шаблон та заповніть своїми даними MongoDB Atlas.**Вихід:**

## 🔧 Особливості реалізації```bash

curl -X POST http://localhost:3000/auth/logout -b cookies.txt

### Підключення до MongoDB```

- **Singleton pattern** - одне з'єднання на весь додаток

- **Автоматичне переподключення** при втраті з'єднання## 🌐 Веб-інтерфейс

- **Timeout налаштування** для запобігання зависанням

- **Graceful shutdown** - коректне закриття з'єднанняВідкрийте у браузері:

### Data Seeding- **http://localhost:3000/products.html** - сторінка з каталогом продуктів з MongoDB

- Перевірка наявності даних перед додаванням

- Автоматичний запуск при старті сервераНа цій сторінці ви побачите:

- Інкрементальні ID для зручності

- Красивий каталог продуктів з MongoDB Atlas

### REST API- Автоматичне завантаження даних через REST API

- Стандартні HTTP методи (GET, POST)- Лічильник продуктів

- JSON формат відповідей- Можливість оновлення даних

- Консистентна структура відповідей- Адаптивний дизайн

- Обробка помилок з правильними статус-кодами

## 👥 Тестові дані

## 📝 Посилання

### Користувачі (для авторизації)

- **Репозиторій:** https://github.com/PalGalya/dz_js45_64_express_passport

- **Гілка з завданням:** `dz_js46_65_mongo_express_integration`1. **Admin:**

- **MongoDB Atlas:** https://www.mongodb.com/cloud/atlas

- **Passport.js Docs:** http://www.passportjs.org/ - Email: `admin@example.com`

  - Password: `password123`

## 📄 Ліцензія

2. **User:**

MIT - Email: `user@example.com`

- Password: `userpass`

---

### Продукти (автоматично додаються в MongoDB)

**Виконала:** Галина Пальчик

**Курс:** Hillel IT School - Fullstack JavaScript При першому запуску сервер автоматично додасть 5 тестових продуктів:

**Дата:** Жовтень 2025

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
