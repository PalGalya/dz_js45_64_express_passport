import dotenv from 'dotenv'
dotenv.config()

const CONFIG = {
  PORT: process.env.PORT || 3000,
  MONGODB_URI: process.env.MONGODB_URI,
  DB_NAME: process.env.DB_NAME
}

export { CONFIG }
