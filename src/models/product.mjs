import mongoose from 'mongoose'

/**
 * Product Schema для MongoDB
 * Використовуються Mongoose для валідації та управління даними
 */
const productSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: [true, 'Product ID is required'],
      unique: true
    },
    name: {
      type: String,
      required: [true, 'Product name is required'],
      minlength: [3, 'Product name must be at least 3 characters']
    },
    description: {
      type: String,
      required: [true, 'Product description is required']
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
      min: [0, 'Price cannot be negative']
    },
    category: {
      type: String,
      required: [true, 'Product category is required'],
      enum: [
        'Электроника',
        'Аксесуари',
        'Ноутбуки',
        'Монітори',
        'Навушники',
        'Клавіатури',
        'Миші',
        'Інше'
      ]
    },
    image: {
      type: String,
      default: null
    },
    stock: {
      type: Number,
      default: 0,
      min: [0, 'Stock cannot be negative']
    },
    rating: {
      type: Number,
      default: 0,
      min: [0, 'Rating cannot be less than 0'],
      max: [5, 'Rating cannot be more than 5']
    }
  },
  {
    timestamps: true,
    collection: 'products'
  }
)

// Індекси для оптимізації пошуку
productSchema.index({ name: 'text' })
productSchema.index({ category: 1 })
productSchema.index({ price: 1 })

export default mongoose.model('Product', productSchema)
