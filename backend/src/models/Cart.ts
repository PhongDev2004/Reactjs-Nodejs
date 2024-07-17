import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    products: [
      {
        _id: false,
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
        },
        quantity: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);

const Cart = mongoose.model('Cart', cartSchema);
export default Cart;
