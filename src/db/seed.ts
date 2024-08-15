import { Pool } from "pg";
import config from "config";
import { drizzle } from "drizzle-orm/node-postgres";
import logger from "src/utils/logger";
import { users } from "./schema";
import { createUser } from "@users/users.service";

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
    await createUser({
      name: "John Doe",
      username: "BlackJohn 21",
      email: "johndoe@email.com",
      password: "password123",
    });
    await createUser({
      name: "Jane Doe",
      username: "Janey",
      email: "janedoe@email.com",
      password: "janerocks",
    });
  } catch (err) {
    logger.error(err);
  } finally {
    process.exit(0);
  }
}

seed();
