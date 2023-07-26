import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  // user: {
  //   type: mongoose.Types.ObjectId,
  //   ref: 'users',
  //   required: true,
  // },
  // product: {
  //   type: mongoose.Types.ObjectId,
  //   ref: 'Products',
  //   required: true,
  // }

user: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true,
  }

});

export default mongoose.model('Cart', cartSchema);