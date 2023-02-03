import "express-async-errors";
import "reflect-metadata";
import express from "express";
import cors from "cors";
import loginRoutes from "./routes/login.routes";
import userRoutes from "./routes/user.routes";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import contactRoutes from "./routes/contact.routes";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactRoutes);

app.use(handleErrorMiddleware);

export default app;
