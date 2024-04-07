import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
  {
    shippingInfo: {
      address: {
        type: String,
        required: [true, "Please enter a valid shipping address"],
        trim: true,
      },
      country: {
        type: String,
        required: [true, "Please enter a valid country"],
      },
      state: {
        type: String,
        required: [true, "Please enter a valid State"],
      },
      city: {
        type: String,
        required: [true, "Please enter a valid City"],
      },
      pinCode: {
        type: Number,
        required: [true, "Please enter a valid Pin code"],
      },
    },

    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },

    subtotal: {
      type: Number,
      required: true,
    },
    tax: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    shippingCharges: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    status:{
        type: String,
        enum: ["Processing", "Shipped", "Delivered"],
        default: "Processing",
    },
    orderItems: [{
        name: String,
        photo: String,
        price: Number,
        quantity: Number,
        productId:{
            type: mongoose.Types.ObjectId,
            ref: "Product",
        },
    }], 

    

  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
