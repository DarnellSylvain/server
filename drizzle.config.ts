import { defineConfig } from "drizzle-kit";
import config from "config";

const url = config.get<string>("database.uri");

export default defineConfig({
  schema: "./src/db/schema/*.ts",
  out: "./src/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url,
  },
  verbose: true,
  strict: true,
});
