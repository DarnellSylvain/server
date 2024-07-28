import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import config from "config";

const host = config.get<string>("database.host");
const port = config.get<number>("database.port");
const user = config.get<string>("database.user");
const password = config.get<string>("database.password");
const name = config.get<string>("database.name");

if (!host || !port || !user || !password || !name) {
  throw new Error("Database configuration is missing");
}

const pool = new Pool({
  user,
  password,
  host: "host.docker.internal",
  port,
  database: name,
});

const db: NodePgDatabase = drizzle(pool);

export default db;
export { pool };
