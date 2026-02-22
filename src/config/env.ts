import dotenv from "dotenv";

dotenv.config();

export const env = {
  db: {
    host: process.env.DATABASE_HOST!,
    port: Number(process.env.DATABASE_PORT!),
    user: process.env.DATABASE_USER!,
    password: process.env.DATABASE_PASSWORD!,
    database: process.env.DATABASE_NAME!,
  },
  wbToken: process.env.WB_API_TOKEN!,
};