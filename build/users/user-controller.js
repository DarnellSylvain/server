"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserController = void 0;
const schema_1 = require("src/db/schema");
const connection_1 = __importDefault(require("src/db/connection"));
const getUserController = async (req, res) => {
    res.send("Hello Worlds");
    try {
        const data = await connection_1.default.select().from(schema_1.users);
        console.log(data);
    }
    catch (err) {
        console.log("error", err);
    }
    //   const data = await getAllUsers();
    //   console.log(data);
    //   res.send(data);
};
exports.getUserController = getUserController;
