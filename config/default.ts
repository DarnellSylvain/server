import * as dotenv from "dotenv";
dotenv.config();

interface DatabaseConfig {
  name: string | undefined;
  user: string | undefined;
  password: string | undefined;
  uri: string | undefined;
  port: string | undefined;
  host: string | undefined;
}

interface AppConfig {
  port: number | string;
  host: string;
  origin: string;
  database: DatabaseConfig;
  saltRounds: number;
}

const config: AppConfig = {
  port: process.env.PORT || 8080,
  host: process.env.HOST || "localhost",
  origin: "http://localhost:3000",
  saltRounds: 10,
  database: {
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    uri: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
  },
};

export default config as AppConfig;
