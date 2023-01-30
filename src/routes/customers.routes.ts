import { Router } from "express";
import {
  getCustomersRank,
  registerCustomer,
  updateCustomer,
} from "@/controllers";
import { sortCustomersRank, validateBody, validateQuery } from "@/middlewares";
import { customerSchema, emailSchema, topQuerySchema } from "@/schemas";

const customersRouter: Router = Router();

customersRouter.post(
  "/register",
  validateBody(customerSchema, "validatedCustomer"),
  registerCustomer
);
customersRouter.get(
  "/rank/customers",
  validateQuery(topQuerySchema, "topQuery"),
  sortCustomersRank,
  getCustomersRank
);

customersRouter.put(
  "/update/email",
  validateBody(emailSchema, "validatedEmail"),
  updateCustomer
);

export { customersRouter };
