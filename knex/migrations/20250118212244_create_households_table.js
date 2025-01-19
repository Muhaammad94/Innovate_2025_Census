exports.up = function (knex) {
  return knex.schema.createTable("households", (table) => {
    table.increments("id").primary();
    table.string("address").notNullable();
    table.timestamps(true, true); // adds created_at and updated_at columns
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("households");
};
