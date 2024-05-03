import { drizzle } from "drizzle-orm/postgres-js";
import dotenv from "dotenv";
dotenv.config();
import postgres from "postgres";
import * as schema from "../schema";

const connectionString = process.env.DB_URL!;
const sql = postgres(connectionString, { max: 1 });
const db = drizzle(sql, { schema });

export default db;
