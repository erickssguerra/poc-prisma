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
  "/rank",
  validateQuery(topQuerySchema),
  sortCoursesRank,
  getCoursesRank
);
coursesRouter.get(
  "/:customer_id",
  customerExists,
  sortCourses,
  getByCostumerId
);

export { coursesRouter };
