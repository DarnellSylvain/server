import { Pool } from "pg";
import config from "config";
import { drizzle } from "drizzle-orm/node-postgres";
import logger from "src/utils/logger";
import { users } from "./schema";

const uri = config.get<string>("database.uri");

const pool = new Pool({
  connectionString: uri,
});

const db = drizzle(pool);

async function seed() {
  try {
    logger.info("Seeding database...");
    logger.info("Deleting all users");
    await db.delete(users);
    logger.info("Inserting users");
    await db.insert(users).values([
      {
        email: "test@test.com",
        password: "password",
        firstName: "John",
        lastName: "Doe",
      },
      {
        email: "jane@doe.com",
        password: "password",
        firstName: "Jane",
        lastName: "Doe",
      },
    ]);
  } catch (err) {
    logger.error(err);
  } finally {
    process.exit(0);
  }
}

seed();
