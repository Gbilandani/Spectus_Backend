import mongoose from "mongoose";

const salesPerson = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  capacities: {
    type: Number,
    required: true,
    default: 8,
  },
  managedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Manager",
    required: true,
  },
});

export const SalesPerson = mongoose.model("salesPerson", salesPerson);
