import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleErrorMiddleware } from "./errors/handleError.middleware";
import loginRoutes from "./routes/login.routes";

const app = express();
app.use(express.json());

app.use("/login", loginRoutes);

app.use(handleErrorMiddleware);
export default app;
