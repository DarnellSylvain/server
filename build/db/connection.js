"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_postgres_1 = require("drizzle-orm/node-postgres");
const pg_1 = require("pg");
const config_1 = __importDefault(require("config"));
const uri = config_1.default.get("database.uri");
const pool = new pg_1.Pool({
    connectionString: uri,
});
const db = (0, node_postgres_1.drizzle)(pool);
exports.default = db;
