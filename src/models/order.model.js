import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  order_no: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  direction: {
    type: String,
    required: true,
  },
  managedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Manager",
    required: true,
  },
});

export const order = mongoose.model("Orders", orderSchema);
