import express from "express";
import {
  createOrder,
  deleteOrder,
  getOrderbyId,
  getOrders,
  updateOrder,
} from "../controllers/order.controller.js";
import { createOrderValidations } from "../validations/order.validations.js";

const orderRoutes = express();

orderRoutes.post("/", createOrderValidations(), createOrder);

orderRoutes.get("/", getOrders);

orderRoutes.get("/:id", getOrderbyId);

orderRoutes.put("/:id", updateOrder);

orderRoutes.delete("/:id", deleteOrder);

export default orderRoutes;
