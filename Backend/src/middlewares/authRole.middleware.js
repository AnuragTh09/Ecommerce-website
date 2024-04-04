// middleware to make sure only admin is allowed 

import { User } from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js"
import CustomError from "../utils/CustomError.js";


const adminOnly =  asyncHandler( async(req, res , next) => {
    
    const { id } = req.query;

    if(!id) {
        throw new CustomError("user is not allowed", 401)
    }

    const user = await User.findById(id);
    if(!user) {
        throw new CustomError("Unauthorized access" , 401)
    }

    if( user.role !== "admin"){
        throw new CustomError("You are not allowed to perform this action", 401)
    }

    next();
})
export default adminOnly