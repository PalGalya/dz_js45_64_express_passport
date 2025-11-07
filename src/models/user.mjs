import mongoose from 'mongoose'

/**
 * User Schema для MongoDB
 * Використовуються Mongoose для валідації та управління даними
 */
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email'
      ]
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters long']
    },
    id: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    timestamps: true,
    collection: 'users'
  }
)

// Індекс для оптимізації пошуку по email
userSchema.index({ email: 1 })

export default mongoose.model('User', userSchema)
