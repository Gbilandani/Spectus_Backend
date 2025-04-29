import { body } from "express-validator";
import { validate } from "./index.js";

export const createSalesPersonValidations = () => {
  return [
    validate([
      body("name").not().isEmpty().withMessage("Name is required"),
      body("capacities").optional(),
      body("managedBy")
        .not()
        .isEmpty()
        .withMessage("Manager is required")
        .isMongoId()
        .withMessage("Invalid Manager ID"),
    ]),
  ];
};
