exports.up = function (knex) {
  return knex.schema.createTable("relations", (table) => {
    table.increments("id").primary();
    table
      .integer("resident_id")
      .unsigned()
      .references("id")
      .inTable("residents")
      .onDelete("CASCADE");
    table
      .integer("related_resident_id")
      .unsigned()
      .references("id")
      .inTable("residents")
      .onDelete("CASCADE");
    table.string("relationship_type").notNullable(); // e.g., 'Parent', 'Sibling', 'Spouse'
    table.timestamps(true, true); // adds created_at and updated_at columns
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("relations");
};
