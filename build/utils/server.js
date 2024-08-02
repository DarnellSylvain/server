"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("../routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: config_1.default.get("origin"),
    credentials: true,
}));
app.use(express_1.default.json());
app.use("/v1", routes_1.default);
exports.default = app;
