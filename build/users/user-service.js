"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
const user_repository_1 = require("./user-repository");
const getAllUsers = async () => {
    const users = await (0, user_repository_1.getUsers)();
    return users;
};
exports.getAllUsers = getAllUsers;
