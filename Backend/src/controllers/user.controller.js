import { User } from "../models/user.model.js";

const createUser = async (req, res, next) => {
    const { username, password, email, _id } = req.body;

    try {
        const existingUser = await User.findOne({
            $or: [{ username }, { email }]
        });

        if (existingUser) {
            return res.status(401).json({
                success: false,
                message: "User already exists"
            });
        }

        const user = await User.create({
            email,
            password,
            _id,
            username: username.toLowerCase()
        });

        return res.status(200).json({
            success: true,
            message: "User created successfully",
            user
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Failed to create user",
            error: error.message
        });
    }
};

export default createUser;
