import "dotenv/config";

export default {
  port: process.env.PORT || 8080,
  host: "localhost",
  origin: "http://localhost:3000",
  database: {
    name: process.env.DB_NAME,
    user: "DB_USER",
    password: "DB_PASSWORD",
    uri: "DB_URI",
  },
};
