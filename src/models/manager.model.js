import mongoose from "mongoose";

const manager = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export const Manager = mongoose.model("Manager", manager);
