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
    const { name, price, description, category, stock } = req.body

    const newProduct = new Product({
      name,
      price,
      description,
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
          name: 'Ноутбук Dell XPS 13',
          price: 45000,
          description: 'Потужний ультрабук для роботи та розваг',
          category: 'electronics',
          stock: 10
        },
        {
          name: 'Смартфон iPhone 15 Pro',
          price: 52000,
          description: 'Флагманський смартфон від Apple',
          category: 'electronics',
          stock: 5
        },
        {
          name: 'Навушники Sony WH-1000XM5',
          price: 12000,
          description: 'Бездротові навушники з шумозаглушенням',
          category: 'electronics',
          stock: 15
        },
        {
          name: 'Стіл офісний IKEA',
          price: 4500,
          description: 'Зручний стіл для домашнього офісу',
          category: 'furniture',
          stock: 8
        },
        {
          name: 'Футболка Cotton 100%',
          price: 800,
          description: 'Якісна бавовняна футболка',
          category: 'clothing',
          stock: 25
        }
      ]

      await Product.insertMany(sampleProducts)
      console.log('✅ Sample products added to database')
    }
  } catch (error) {
    console.error('Error seeding products:', error)
  }
}
