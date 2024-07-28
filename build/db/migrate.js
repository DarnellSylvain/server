"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const logger_1 = __importDefault(require("../utils/logger"));
const pg_1 = require("pg");
const node_postgres_1 = require("drizzle-orm/node-postgres");
const migrator_1 = require("drizzle-orm/node-postgres/migrator");
const uri = config_1.default.get("database.uri");
async function runMigration() {
    try {
        logger_1.default.info("Running migration");
        const pool = new pg_1.Pool({ connectionString: uri });
        const db = (0, node_postgres_1.drizzle)(pool);
        await (0, migrator_1.migrate)(db, {
            migrationsFolder: "./src/db/migrations",
        });
        logger_1.default.info("Migration complete");
        pool.end();
    }
    catch (err) {
        logger_1.default.error("Migration error", err);
    }
}
runMigration();
