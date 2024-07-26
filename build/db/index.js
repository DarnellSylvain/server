"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_postgres_1 = require("drizzle-orm/node-postgres");
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    host: "127.0.0.1",
    port: 5432,
    user: process.env.DB_USER,
    password: "password",
    database: "db_name",
});
const db = (0, node_postgres_1.drizzle)(pool);
