import "module-alias/register";

import app from "./utils/server";
import config from "config";
import logger from "./utils/logger";

const port = config.get<number>("port");

app.listen(port, async () => {
  logger.info(`App is running at http://localhost:${port}`);
});
