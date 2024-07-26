import app from "./utils/server";
import config from "config";
import logger from "./utils/logger";
import * as dotenv from "dotenv";
import connect from "./db";

dotenv.config();

const port = config.get<number>("port");

connect();

app.listen(port, async () => {
  logger.info(`App is running at http://localhost:${port}`);
});
