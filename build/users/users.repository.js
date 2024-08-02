"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const schema_1 = require("src/db/schema");
const connection_1 = __importDefault(require("src/db/connection"));
const getUsers = async () => {
    const result = await connection_1.default.select().from(schema_1.users);
    return result;
};
exports.getUsers = getUsers;
