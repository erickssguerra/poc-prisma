import { Router } from "express";
import { getByCostumerId, getCoursesRank } from "@/controllers";
import {
  sortCoursesRank,
  sortCourses,
  customerExists,
  validateQuery,
} from "@/middlewares";
import { topQuerySchema } from "@/schemas";

const coursesRouter: Router = Router();

coursesRouter.get(
  "/rank/courses",
  validateQuery(topQuerySchema, "topQuery"),
  sortCoursesRank,
  getCoursesRank
);
coursesRouter.get(
  "/courses/:customer_id",
  customerExists,
  sortCourses,
  getByCostumerId
);

export { coursesRouter };
