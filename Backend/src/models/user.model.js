import mongoose from 'mongoose'
import validator from 'validator'
const userSchema = new mongoose.Schema( {
    _id:{
        type: String,
        // required: [true, "Please enter Id"],
    },
    username:{
        type: String,
        required: [true, "Please enter Username"],
        unique: true,
        maxLength: [20, "Name should not exceed 20 characters"],
        trim: true,
        lowercase: true,
        index: true,

    },
    email:{
        type: String,
        unique:[true, "Email already Exist"],
        required: [true, "Please enter Email"],
        trim: true,
        lowercase: true,
        validate:{
            validator: validator.isEmail,
            message: "Invalid email format "
        }
    },
    password:{
        type: String,
        required: [true, "Please enter Password"],
        minLength: [8, "Password must be at least 5 characters"],
        //hiding password field
        select: false
    },
    photo:{
        type: String,
        // required: [true, "Please provide a photo"],
    },
    role:{
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
    
} ,{timestamps: true} );


export const User  = mongoose.model('User', userSchema)