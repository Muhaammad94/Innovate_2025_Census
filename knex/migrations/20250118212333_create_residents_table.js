exports.up = function (knex) {
  return knex.schema.createTable("residents", (table) => {
    table.increments("id").primary();
    table
      .integer("household_id")
      .unsigned()
      .references("id")
      .inTable("households")
      .onDelete("CASCADE");
    table.string("name").notNullable();
    table.integer("age").notNullable();
    table.string("gender").notNullable();
    table
      .integer("parent_id")
      .unsigned()
      .references("id")
      .inTable("residents")
      .onDelete("SET NULL");
    table
      .integer("spouse_id")
      .unsigned()
      .references("id")
      .inTable("residents")
      .onDelete("SET NULL");
    table.string("relationship_to_household").notNullable(); // e.g., 'Head', 'Member'
    table.timestamps(true, true); // adds created_at and updated_at columns
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("residents");
};
