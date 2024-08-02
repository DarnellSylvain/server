"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const createUserSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
    // first_name
    // last_name
    // password
    // email
    }),
});
//   id: serial("id").primaryKey(),
//   email: varchar("email", { length: 255 }).unique().notNull(),
//   password: varchar("password").notNull(),
//   firstName: varchar("first_name", { length: 255 }).notNull(),
//   lastName: varchar("last_name", { length: 255 }).notNull(),
//   createdAt: timestamp("created_at").defaultNow(),
//   updatedAt: timestamp("updated_at").defaultNow(),
//   lastLogin: timestamp("last_login"),
