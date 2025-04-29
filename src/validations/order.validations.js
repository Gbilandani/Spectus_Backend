import { body } from "express-validator";
import { validate } from "./index.js";

export const createOrderValidations = () => {
  return [
    validate([
      body("name").not().isEmpty().withMessage("Name is required"),
      body("Address").not().isEmpty().withMessage("Address is required"),
      body("order_no").not().isEmpty().withMessage("Order No is required"),
      body("distance")
        .not()
        .isEmpty()
        .withMessage("Distance is required")
        .isNumeric()
        .withMessage("Distance must be a number"),
      body("direction").not().isEmpty().withMessage("Direction is required"),
      body("managedBy")
        .not()
        .isEmpty()
        .withMessage("Manager is required")
        .isMongoId()
        .withMessage("Invalid Manager ID"),
    ]),
  ];
};
