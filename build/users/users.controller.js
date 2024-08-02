"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserHandler = void 0;
const createUserHandler = async (req, res) => {
    console.log(req.body);
    res.send("You're trying to create a user?");
};
exports.createUserHandler = createUserHandler;
