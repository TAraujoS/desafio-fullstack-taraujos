import { DataSource } from "typeorm";
import path from "path";
import "dotenv/config";

export const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        entities: ["src/entities/**/*.ts"],
        synchronize: true,
      }
    : {
        type: "postgres",
        host: process.env.HOST,
        port: parseInt(process.env.PGPORT!),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        logging: true,
        synchronize: false,
        entities: [path.join(__dirname, "./entities/**.{js,ts}")],
        migrations: [path.join(__dirname, "./migrations/**.{js,ts}")],
      }
);
