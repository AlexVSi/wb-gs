import type { Knex } from "knex";
import dotenv from "dotenv";
import { env } from "./config/env.js";

dotenv.config();

const config: Knex.Config = {
  client: "pg",
  connection: {
    host: env.db.host,
    port: Number(env.db.port),
    user: env.db.user,
    password: env.db.password,
    database: env.db.database
  },
  migrations: {
    directory: "./src/database/migrations",
    extension: "ts"
  }
};

export default config;