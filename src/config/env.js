import dotenv from "dotenv";

dotenv.config();

export const PORT = Number(process.env.PORT) || 3000;
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_PORT = Number(process.env.DB_PORT) || 3306;
export const DB_NAME = process.env.DB_NAME || "biblioteca_db";
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "contoso";

export default {
  PORT,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
};
