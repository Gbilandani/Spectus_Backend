import express from "express";
import {
  deleteSalesPerson,
  createSalesPerson,
  getSalesPerson,
  getSalesPersonById,
  updateSalesPerson,
} from "../controllers/salesPerson.controller.js";

const salesPersonRoutes = express();

salesPersonRoutes.post("/", createSalesPerson);

salesPersonRoutes.get("/", getSalesPerson);

salesPersonRoutes.get("/:id", getSalesPersonById);

salesPersonRoutes.put("/:id", updateSalesPerson);

salesPersonRoutes.delete("/:id", deleteSalesPerson);

export default salesPersonRoutes;
