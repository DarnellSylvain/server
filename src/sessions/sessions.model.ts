import { InferSelectModel } from "drizzle-orm";
import {
  pgTable,
  serial,
  timestamp,
  integer,
  real,
  boolean,
} from "drizzle-orm/pg-core";
import { users } from "src/db/schema";

export const gameSessions = pgTable("game_sessions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => users.id)
    .notNull(),
  startTime: timestamp("start_time").defaultNow(),
  endTime: timestamp("end_time"),
  active: boolean("active").default(true),
  bankroll: real("bankroll"),
  finalAmount: real("final_amount"),
});

export const cashInputs = pgTable("cash_inputs", {
  id: serial("id").primaryKey(),
  sessionId: integer("session_id").references(() => gameSessions.id),
  amount: real("amount").notNull(),
});

export type GameSession = InferSelectModel<typeof gameSessions>;
export type CashInputs = InferSelectModel<typeof cashInputs>;
