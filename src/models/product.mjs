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
      trim: true,
      minlength: [3, 'Product name must be at least 3 characters long'],
      maxlength: [100, 'Product name cannot exceed 100 characters']
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
      min: [0, 'Price cannot be negative']
    },
    description: {
      type: String,
      required: [true, 'Product description is required'],
      trim: true,
      minlength: [10, 'Description must be at least 10 characters long'],
      maxlength: [500, 'Description cannot exceed 500 characters']
    },
    category: {
      type: String,
      required: [true, 'Product category is required'],
      enum: {
        values: ['electronics', 'clothing', 'food', 'furniture'],
        message: '{VALUE} is not a valid category'
      }
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
    timestamps: true
  }
)

// Додаємо індекси для оптимізації запитів
productSchema.index({ name: 1 })
productSchema.index({ category: 1 })
productSchema.index({ price: 1 })

const Product = mongoose.model('Product', productSchema)

export default Product
