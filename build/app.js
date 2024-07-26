"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./utils/server"));
const config_1 = __importDefault(require("config"));
const logger_1 = __importDefault(require("./utils/logger"));
require("dotenv/config");
const port = config_1.default.get("port");
server_1.default.listen(port, async () => {
    logger_1.default.info(`App is running at http://localhost:${port}`);
});
