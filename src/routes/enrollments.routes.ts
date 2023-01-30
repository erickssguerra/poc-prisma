import { Router } from "express";
import { enrollCustomer, unenrollCustomer } from "@/controllers";
import { validateBody } from "@/middlewares";
import { enrollmentSchema } from "@/schemas";

const enrollmentsRouter: Router = Router();

enrollmentsRouter.post(
  "/enroll",
  validateBody(enrollmentSchema, "validEnrollment"),
  enrollCustomer
);

enrollmentsRouter.delete(
  "/enroll",
  validateBody(enrollmentSchema, "validEnrollment"),
  unenrollCustomer
);

export { enrollmentsRouter };
