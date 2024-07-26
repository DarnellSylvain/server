import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import config from "config";

const { name, user, password, host } = config.get<any>("database");

const pool = new Pool({
  database: name,
  host: host,
  port: 5432,
  user,
  password,
});

const db = drizzle(pool);

async function connect() {
  try {
    await pool.connect();
    console.log("Connected to database");
  } catch (err) {
    console.error("Failed to connect to database", err);
  }
}

export default connect;
