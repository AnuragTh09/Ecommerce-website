import mongoose from 'mongoose';
import { DB_NAME } from '../constant.js'
const connectDB = async() => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n ☘️  MongoDb is connected successfully. Host at 🚀: ${connectionInstance.connection.host} `)
    }
    catch(error){
        console.error("\n ☠️ Error, Failed to connect ", error);
    }
}

export default connectDB