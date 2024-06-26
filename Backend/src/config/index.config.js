import dotenv from 'dotenv'

dotenv.config({})

const config = {
    PORT: process.env.PORT || 3000,
    MONGODB_URI: process.env.MONGODB_URI || "",
    STRIPE_KEY: process.env.STRIPE_KEY || "", 
}

export default config
