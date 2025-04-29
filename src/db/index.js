import mongoose from "mongoose";
import { DB_URI } from "../constant/index.js";
const databaseUri = DB_URI;
export const database = async () => {
  return mongoose
    .connect(databaseUri)
    .then(() => console.log(`Database Connected: ${DB_URI}`));
};
