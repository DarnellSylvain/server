import * as dotenv from "dotenv";
dotenv.config();

interface DatabaseConfig {
  name: string | undefined;
  user: string | undefined;
  password: string | undefined;
  uri: string | undefined;
}

interface AppConfig {
  port: number | string;
  host: string;
  origin: string;
  database: DatabaseConfig;
}

const config: AppConfig = {
  port: process.env.PORT || 8080,
  host: process.env.HOST || "localhost",
  origin: "http://localhost:3000",
  database: {
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    uri: process.env.DB_URI,
  },
};

export default config as AppConfig;
