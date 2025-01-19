// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
require("dotenv").config();
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST, // Get host from DB_HOST env var
      user: process.env.DB_USER, // Get user from DB_USER env var
      password: process.env.DB_PASSWORD, // Get password from DB_PASSWORD env var
      database: process.env.DB_NAME, // Get database name from DB_NAME env var
    },
    migrations: {
      directory: "../census-system/knex/migrations", // Directory for migrations
    },
    seeds: {
      directory: "../census-system/knex/seeds", // Directory for seed files
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
