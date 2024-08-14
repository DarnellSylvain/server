import config from "config";
import cors from "cors";
import express from "express";
import routes from "../routes";

const app = express();
app.use(
  cors({
    origin: config.get("origin"),
    credentials: true,
  }),
);

app.use(express.json());

app.use("/healthcheck", (req, res) => {
  res.status(200).send("OK");
});

app.use("/v1", routes);

export default app;
