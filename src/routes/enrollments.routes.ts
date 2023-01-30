import { Router } from "express";
import { enrollCustomer, unenrollCustomer } from "@/controllers";
import { validateBody } from "@/middlewares";
import { enrollmentSchema } from "@/schemas";

const enrollmentsRouter: Router = Router();

enrollmentsRouter
  .post("/", validateBody(enrollmentSchema), enrollCustomer)
  .delete("/", validateBody(enrollmentSchema), unenrollCustomer);

export { enrollmentsRouter };
