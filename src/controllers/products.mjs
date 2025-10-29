import Product from '../models/product.mjs'

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
    const product = await Product.findById(id)

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
    const { name, price, category, stock } = req.body

    const newProduct = new Product({
      name,
      price,
      category,
      stock
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
      message: 'Помилка створення продукту'
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
          name: 'Ноутбук Dell XPS 13',
          price: 45000,
          description:
            'Портативний ноутбук з високою продуктивністю для професійної роботи',
          category: 'electronics',
          stock: 10
        },
        {
          name: 'Смартфон iPhone 15 Pro',
          price: 52000,
          description:
            'Найновіший смартфон Apple з титановим корпусом та чіпом A17 Pro',
          category: 'electronics',
          stock: 5
        },
        {
          name: 'Навушники Sony WH-1000XM5',
          price: 12000,
          description:
            'Бездротові навушники з активним шумоподавленням найвищого класу',
          category: 'electronics',
          stock: 15
        },
        {
          name: 'Клавіатура Logitech MX Keys',
          price: 4500,
          description:
            'Бездротова клавіатура з підсвічуванням для максимального комфорту набору',
          category: 'electronics',
          stock: 20
        },
        {
          name: 'Монітор LG UltraWide 34"',
          price: 18000,
          description:
            'Широкоформатний монітор для підвищення продуктивності та ігор',
          category: 'electronics',
          stock: 8
        }
      ]

      await Product.insertMany(sampleProducts)
      console.log('✅ Sample products added to database')
    }
  } catch (error) {
    console.error('Error seeding products:', error)
  }
}
