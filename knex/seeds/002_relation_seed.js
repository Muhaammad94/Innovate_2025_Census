exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("relations")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("relations").insert([
        { resident_id: 1, related_resident_id: 3, relationship_type: "Parent" },
        { resident_id: 2, related_resident_id: 3, relationship_type: "Parent" },
      ]);
    });
};
