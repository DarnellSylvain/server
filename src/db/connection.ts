import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import config from "config";

const uri = config.get<string>("database.uri");

const pool = new Pool({
  connectionString: uri,
});

const db = drizzle(pool);

export default db;
