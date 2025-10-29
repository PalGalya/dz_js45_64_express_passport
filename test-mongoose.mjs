import 'dotenv/config'
import { connectToDatabase, closeDatabase } from './src/db/mongodb.mjs'
import Product from './src/models/product.mjs'

async function testMongooseIntegration() {
  try {
    console.log('Testing Mongoose integration...')

    // Підключення до бази даних
    await connectToDatabase()
    console.log('Database connection successful')

    // Перевірка кількості продуктів
    const count = await Product.countDocuments()
    console.log(`Total products in database: ${count}`)

    // Тестування створення продукту
    const testProduct = new Product({
      name: 'Test Product',
      price: 100,
      description: 'This is a test product for testing purposes',
      category: 'electronics',
      stock: 5
    })

    const savedProduct = await testProduct.save()
    console.log('Product creation test successful:', savedProduct.name)

    // Тестування читання продуктів
    const products = await Product.find().limit(5)
    console.log(
      `Product reading test successful: Found ${products.length} products`
    )

    // Тестування оновлення
    await Product.updateOne({ _id: savedProduct._id }, { $inc: { stock: 1 } })
    console.log('Product update test successful')

    // Тестування видалення тестового продукту
    await Product.deleteOne({ _id: savedProduct._id })
    console.log('Product deletion test successful')

    // Тестування агрегації
    const stats = await Product.aggregate([
      {
        $group: {
          _id: null,
          totalProducts: { $sum: 1 },
          avgPrice: { $avg: '$price' }
        }
      }
    ])
    console.log('Aggregation test successful:', stats[0])

    console.log('All Mongoose integration tests passed!')
  } catch (error) {
    console.error('Test failed:', error.message)
  } finally {
    await closeDatabase()
    process.exit(0)
  }
}

testMongooseIntegration()
