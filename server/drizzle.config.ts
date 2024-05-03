import dotenv from "dotenv";
dotenv.config();
import type { Config } from "drizzle-kit";
export default {
  schema: "./src/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    connectionString: process.env.DB_URL!,
  },
  driver: "pg",
} satisfies Config;
