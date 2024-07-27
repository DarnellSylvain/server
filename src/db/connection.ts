import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import config from "config";

const uri = config.get<string>("uri");

const pool = new Pool({
  connectionString: "postgres://darnell:darnell@localhost:8080/casino-pal",
});

const db = drizzle(pool);

export default db;
