import { getCollection } from '../db/mongodb.mjs'

/**
 * Отримати всі продукти з бази даних
 */
export const getAllProducts = async (req, res) => {
  try {
    const products = await getCollection('products')
    const allProducts = await products.find({}).toArray()

    res.status(200).json({
      status: 'success',
      data: {
        products: allProducts,
        count: allProducts.length
      }
    })
  } catch (error) {
    console.error('Error fetching products:', error)
    res.status(500).json({
      status: 'error',
      message: 'Помилка отримання даних з бази даних'
    })
  }
}

/**
 * Отримати продукт за ID
 */
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params
    const products = await getCollection('products')

    const product = await products.findOne({ id: parseInt(id) })

    if (!product) {
      return res.status(404).json({
        status: 'error',
        message: 'Продукт не знайдено'
      })
    }

    res.status(200).json({
      status: 'success',
      data: { product }
    })
  } catch (error) {
    console.error('Error fetching product:', error)
    res.status(500).json({
      status: 'error',
      message: 'Помилка отримання даних з бази даних'
    })
  }
}

/**
 * Створити новий продукт
 */
export const createProduct = async (req, res) => {
  try {
    const { name, price, description, category } = req.body
    const products = await getCollection('products')

    // Отримуємо максимальний ID для створення нового
    const lastProduct = await products
      .find({})
      .sort({ id: -1 })
      .limit(1)
      .toArray()
    const newId = lastProduct.length > 0 ? lastProduct[0].id + 1 : 1

    const newProduct = {
      id: newId,
      name,
      price,
      description,
      category,
      createdAt: new Date()
    }

    await products.insertOne(newProduct)

    res.status(201).json({
      status: 'success',
      message: 'Продукт успішно створено',
      data: { product: newProduct }
    })
  } catch (error) {
    console.error('Error creating product:', error)
    res.status(500).json({
      status: 'error',
      message: 'Помилка створення продукту'
    })
  }
}

/**
 * Ініціалізація колекції з тестовими даними
 */
export const seedProducts = async () => {
  try {
    const products = await getCollection('products')
    const count = await products.countDocuments()

    if (count === 0) {
      const sampleProducts = [
        {
          id: 1,
          name: 'Ноутбук Dell XPS 13',
          price: 45000,
          description: 'Потужний ультрабук для роботи та розваг',
          category: 'Електроніка',
          createdAt: new Date()
        },
        {
          id: 2,
          name: 'Смартфон iPhone 15 Pro',
          price: 52000,
          description: 'Флагманський смартфон від Apple',
          category: 'Електроніка',
          createdAt: new Date()
        },
        {
          id: 3,
          name: 'Навушники Sony WH-1000XM5',
          price: 12000,
          description: 'Бездротові навушники з шумозаглушенням',
          category: 'Аксесуари',
          createdAt: new Date()
        },
        {
          id: 4,
          name: 'Клавіатура Logitech MX Keys',
          price: 4500,
          description: 'Механічна клавіатура для продуктивної роботи',
          category: 'Аксесуари',
          createdAt: new Date()
        },
        {
          id: 5,
          name: 'Монітор LG UltraWide 34"',
          price: 18000,
          description: 'Широкоформатний монітор для багатозадачності',
          category: 'Електроніка',
          createdAt: new Date()
        }
      ]

      await products.insertMany(sampleProducts)
      console.log('✅ Sample products added to database')
    }
  } catch (error) {
    console.error('Error seeding products:', error)
  }
}
