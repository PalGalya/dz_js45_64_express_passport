# Інструкція з налаштування MongoDB Atlas

## Крок 1: Створення облікового запису

1. Перейдіть на https://www.mongodb.com/cloud/atlas
2. Натисніть "Try Free" або "Sign In"
3. Зареєструйтеся або увійдіть

## Крок 2: Створення кластера

1. Після входу натисніть "Build a Database"
2. Виберіть FREE tier (M0)
3. Виберіть регіон (найближчий до вас, наприклад Frankfurt)
4. Натисніть "Create"

## Крок 3: Налаштування доступу

### 3.1 Створення користувача бази даних

1. У розділі "Security" -> "Database Access" натисніть "Add New Database User"
2. Виберіть метод аутентифікації: Password
3. Введіть username (наприклад: `myuser`)
4. Згенеруйте або введіть пароль (збережіть його!)
5. Надайте права: "Read and write to any database"
6. Натисніть "Add User"

### 3.2 Налаштування Network Access

1. У розділі "Security" -> "Network Access" натисніть "Add IP Address"
2. Для тестування можна вибрати "Allow Access from Anywhere" (0.0.0.0/0)
   - ⚠️ Для продакшн використовуйте конкретні IP-адреси!
3. Натисніть "Confirm"

## Крок 4: Отримання Connection String

1. Перейдіть у розділ "Database"
2. Натисніть кнопку "Connect" біля вашого кластера
3. Виберіть "Drivers"
4. Виберіть Driver: Node.js, Version: 6.8 or later
5. Скопіюйте Connection String

Connection string буде виглядати так:

```
mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

## Крок 5: Налаштування .env файлу

1. Відкрийте файл `.env` у корені проекту
2. Замініть `<username>` на ваш username
3. Замініть `<password>` на ваш пароль
4. Замініть `<cluster>` на назву вашого кластера
5. Додайте назву бази даних після `.net/`, наприклад: `expressApp`

Приклад:

```env
MONGODB_URI=mongodb+srv://myuser:MyPassword123@cluster0.ab1cd.mongodb.net/expressApp?retryWrites=true&w=majority
SESSION_SECRET=my-super-secret-key-change-in-production
PORT=3000
```

## Крок 6: Запуск проекту

```bash
npm install
npm start
```

## Перевірка підключення

Якщо все налаштовано правильно, ви побачите:

```
✅ Successfully connected to MongoDB Atlas
✅ Sample products added to database
🚀 Server is running on port 3000
📄 Products page: http://localhost:3000/products.html
```

## Можливі помилки

### 1. "MongoServerError: bad auth"

- Перевірте правильність username та password у .env файлі
- Переконайтеся, що немає зайвих пробілів

### 2. "MongoNetworkError: connection timeout"

- Перевірте налаштування Network Access
- Переконайтеся, що ваша IP-адреса додана до whitelist

### 3. "MongoParseError: Invalid connection string"

- Перевірте формат connection string
- Переконайтеся, що пароль закодований правильно (замініть спецсимволи на %xx)

## Додаткова інформація

### Перегляд даних

1. У MongoDB Atlas перейдіть до "Database"
2. Натисніть "Browse Collections"
3. Ви побачите вашу базу даних `expressApp` та колекцію `products`

### Моніторинг

1. У розділі "Metrics" можна переглянути статистику використання
2. У розділі "Logs" можна переглянути логи підключень

## Безпека для Production

⚠️ Для продакшн середовища:

- Використовуйте складні паролі
- Обмежте доступ до конкретних IP-адрес
- Використовуйте змінні оточення (не зберігайте паролі в коді)
- Регулярно змінюйте паролі
- Налаштуйте backup
