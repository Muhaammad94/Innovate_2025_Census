exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("households")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("households").insert([
        { address: "123 Main St" },
        { address: "456 Oak Ave" },
      ]);
    });
};
