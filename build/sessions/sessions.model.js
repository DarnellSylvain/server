"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cashInputs = exports.gameSessions = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const schema_1 = require("src/db/schema");
exports.gameSessions = (0, pg_core_1.pgTable)("game_sessions", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    userId: (0, pg_core_1.integer)("user_id")
        .references(() => schema_1.users.id)
        .notNull(),
    startTime: (0, pg_core_1.timestamp)("start_time").defaultNow(),
    endTime: (0, pg_core_1.timestamp)("end_time"),
    active: (0, pg_core_1.boolean)("active").default(true),
    bankroll: (0, pg_core_1.real)("bankroll"),
    finalAmount: (0, pg_core_1.real)("final_amount"),
});
exports.cashInputs = (0, pg_core_1.pgTable)("cash_inputs", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    sessionId: (0, pg_core_1.integer)("session_id").references(() => exports.gameSessions.id),
    amount: (0, pg_core_1.real)("amount").notNull(),
});
