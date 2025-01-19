const { Client } = require("pg");
require("dotenv").config(); // to use your .env file to get credentials

// Create a new instance of the pg Client
const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 5432, // default PostgreSQL port is 5432
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

// Connect to PostgreSQL
client
  .connect()
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection error:", err));

module.exports = client;
