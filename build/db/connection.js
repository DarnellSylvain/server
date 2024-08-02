"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const node_postgres_1 = require("drizzle-orm/node-postgres");
const pg_1 = require("pg");
const config_1 = __importDefault(require("config"));
const host = config_1.default.get("database.host");
const port = config_1.default.get("database.port");
const user = config_1.default.get("database.user");
const password = config_1.default.get("database.password");
const name = config_1.default.get("database.name");
if (!host || !port || !user || !password || !name) {
    throw new Error("Database configuration is missing");
}
const pool = new pg_1.Pool({
    user,
    password,
    host: "host.docker.internal",
    port,
    database: name,
});
exports.pool = pool;
const db = (0, node_postgres_1.drizzle)(pool);
exports.default = db;
