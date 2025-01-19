exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("username").unique().notNullable();
    table.string("password").notNullable();
    table.string("role").notNullable(); // e.g., 'Admin', 'User'
    table.timestamps(true, true); // adds created_at and updated_at columns
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
