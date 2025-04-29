import express from "express";
import {
  createManager,
  deleteManager,
  getManagerDetails,
  getManagers,
  updateManager,
} from "../controllers/manager.controller.js";

const managerRoutes = express();

managerRoutes.post("/", createManager);

managerRoutes.get("/", getManagers);

managerRoutes.get("/:id", getManagerDetails);

managerRoutes.put("/:id", updateManager);

managerRoutes.delete("/:id", deleteManager);

export default managerRoutes;
