import { Router } from "express";
import {
  getCustomersRank,
  registerCustomer,
  updateCustomer,
} from "@/controllers";
import { sortCustomersRank, validateBody, validateQuery } from "@/middlewares";
import { customerSchema, emailSchema, topQuerySchema } from "@/schemas";

const customersRouter: Router = Router();

customersRouter
  .post("/register", validateBody(customerSchema), registerCustomer)
  .get(
    "/rank",
    validateQuery(topQuerySchema),
    sortCustomersRank,
    getCustomersRank
  )
  .put("/update", validateBody(emailSchema), updateCustomer);

export { customersRouter };
