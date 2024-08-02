"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
const users_repository_1 = require("./users.repository");
const getAllUsers = async () => {
    const users = await (0, users_repository_1.getUsers)();
    return users;
};
exports.getAllUsers = getAllUsers;
