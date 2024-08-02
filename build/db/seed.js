"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const config_1 = __importDefault(require("config"));
const node_postgres_1 = require("drizzle-orm/node-postgres");
const logger_1 = __importDefault(require("src/utils/logger"));
const schema_1 = require("./schema");
const uri = config_1.default.get("database.uri");
const pool = new pg_1.Pool({
    connectionString: uri,
});
const db = (0, node_postgres_1.drizzle)(pool);
async function seed() {
    try {
        logger_1.default.info("Seeding database...");
        logger_1.default.info("Deleting all users");
        await db.delete(schema_1.users);
        logger_1.default.info("Inserting users");
        await db.insert(schema_1.users).values([
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
    }
    catch (err) {
        logger_1.default.error(err);
    }
    finally {
        process.exit(0);
    }
}
seed();
