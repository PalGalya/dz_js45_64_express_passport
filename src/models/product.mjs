import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
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
    category: {
      type: String,
      required: [true, 'Product category is required'],
      enum: {
        values: ['electronics', 'clothing', 'food', 'furniture'],
        message: '{VALUE} is not a valid category'
      }
    },
    stock: {
      type: Number,
      default: 0,
      min: [0, 'Stock cannot be negative']
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
