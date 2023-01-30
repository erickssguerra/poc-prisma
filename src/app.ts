import express, { Express, json, Request, Response } from "express";
import cors from "cors";
import { coursesRouter, customersRouter, enrollmentsRouter } from "@/routes";

const server: Express = express();

server
  .use(json())
  .use(cors())
  .get("/health", (req: Request, res: Response) => res.send("Ok"))
  .use("/courses",coursesRouter)
  .use("/customers",customersRouter)
  .use("/enroll",enrollmentsRouter);

const port = +process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`Server running in port ${port}.`);
});
