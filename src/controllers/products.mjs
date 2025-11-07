import Product from '../models/Product.mjs'

/**
 * Отримати всі продукти з бази даних
 */
export const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find({})

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

    const product = await Product.findOne({ id: parseInt(id) })

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

    // Отримуємо максимальний ID для створення нового
    const lastProduct = await Product.findOne().sort({ id: -1 })
    const newId = lastProduct ? lastProduct.id + 1 : 1

    const newProduct = new Product({
      id: newId,
      name,
      price,
      description,
      category
    })

    await newProduct.save()

    res.status(201).json({
      status: 'success',
      message: 'Продукт успішно створено',
      data: { product: newProduct }
    })
  } catch (error) {
    console.error('Error creating product:', error)
    res.status(500).json({
      status: 'error',
      message: error.message || 'Помилка створення продукту'
    })
  }
}

/**
 * Оновити продукт
 */
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params
    const updateData = req.body

    const product = await Product.findOneAndUpdate(
      { id: parseInt(id) },
      updateData,
      { new: true, runValidators: true }
    )

    if (!product) {
      return res.status(404).json({
        status: 'error',
        message: 'Продукт не знайдено'
      })
    }

    res.status(200).json({
      status: 'success',
      message: 'Продукт успішно оновлено',
      data: { product }
    })
  } catch (error) {
    console.error('Error updating product:', error)
    res.status(500).json({
      status: 'error',
      message: error.message || 'Помилка оновлення продукту'
    })
  }
}

/**
 * Видалити продукт
 */
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params

    const product = await Product.findOneAndDelete({ id: parseInt(id) })

    if (!product) {
      return res.status(404).json({
        status: 'error',
        message: 'Продукт не знайдено'
      })
    }

    res.status(200).json({
      status: 'success',
      message: 'Продукт успішно видалено',
      data: { product }
    })
  } catch (error) {
    console.error('Error deleting product:', error)
    res.status(500).json({
      status: 'error',
      message: 'Помилка видалення продукту'
    })
  }
}

/**
 * Ініціалізація колекції з тестовими даними
 */
export const seedProducts = async () => {
  try {
    const count = await Product.countDocuments()

    if (count === 0) {
      const sampleProducts = [
        {
          id: 1,
          name: 'Ноутбук Dell XPS 13',
          price: 45000,
          description: 'Потужний ультрабук для роботи та розваг',
          category: 'Ноутбуки'
        },
        {
          id: 2,
          name: 'Смартфон iPhone 15 Pro',
          price: 52000,
          description: 'Флагманський смартфон від Apple',
          category: 'Электроника'
        },
        {
          id: 3,
          name: 'Навушники Sony WH-1000XM5',
          price: 12000,
          description: 'Бездротові навушники з шумозаглушенням',
          category: 'Навушники'
        },
        {
          id: 4,
          name: 'Клавіатура Logitech MX Keys',
          price: 4500,
          description: 'Механічна клавіатура для продуктивної роботи',
          category: 'Клавіатури'
        },
        {
          id: 5,
          name: 'Монітор LG UltraWide 34"',
          price: 18000,
          description: 'Широкоформатний монітор для багатозадачності',
          category: 'Монітори'
        }
      ]

      await Product.insertMany(sampleProducts)
      console.log('✅ Sample products added to database')
    }
  } catch (error) {
    console.error('Error seeding products:', error)
  }
}
