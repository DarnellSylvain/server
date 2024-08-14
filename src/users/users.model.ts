import { InferSelectModel } from "drizzle-orm";
import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  password: varchar("password").notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  username: varchar("username", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  lastLogin: timestamp("last_login"),
});

export type User = InferSelectModel<typeof users>;
