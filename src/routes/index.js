import express from "express";
import orderRoutes from "./order.routes.js";
import managerRoutes from "./manager.routes.js";
import salesPersonRoutes from "./salesPerson.routes.js";

const routes = express();

routes.use("/order", orderRoutes);
routes.use("/manager", managerRoutes);
routes.use("/sales-person", salesPersonRoutes);

export default routes;
