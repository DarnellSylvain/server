import config from "config";
import logger from "../utils/logger";
import { Pool } from "pg";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";

const uri = config.get<string>("database.uri");

async function main() {
  try {
    logger.info("Running migration");
    const pool = new Pool({ connectionString: uri });
    const db: NodePgDatabase = drizzle(pool);
    await migrate(db, {
      migrationsFolder: "./src/db/migrations",
    });
    logger.info("Migration complete");
    pool.end();
    process.exit(0);
  } catch (err) {
    logger.error("Migration error", err);
  }
}

main();
