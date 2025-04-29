import { body } from "express-validator";
import { validate } from "./index.js";

export const createmanagerValidations = () => {
  return [
    validate([body("name").not().isEmpty().withMessage("Name is required")]),
  ];
};
