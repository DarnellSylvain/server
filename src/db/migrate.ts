import config from "config";
import logger from "../utils/logger";
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";

const uri = config.get<string>("database.uri");

async function runMigration() {
  try {
    logger.info("Running migration");
    const pool = new Pool({ connectionString: uri });
    const db = drizzle(pool);
    await migrate(db, {
      migrationsFolder: "./src/db/migrations",
    });
    logger.info("Migration complete");
    pool.end();
  } catch (err) {
    logger.error("Migration error", err);
  }
}

runMigration();
