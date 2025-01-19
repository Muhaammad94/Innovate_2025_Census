exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("residents")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("residents").insert([
        {
          household_id: 1,
          name: "John Doe",
          age: 35,
          gender: "Male",
          relationship_to_household: "Head",
        },
        {
          household_id: 1,
          name: "Jane Doe",
          age: 30,
          gender: "Female",
          relationship_to_household: "Spouse",
          spouse_id: 1,
        },
        {
          household_id: 1,
          name: "Jim Doe",
          age: 10,
          gender: "Male",
          relationship_to_household: "Child",
          parent_id: 1,
        },
        {
          household_id: 2,
          name: "Alice Smith",
          age: 28,
          gender: "Female",
          relationship_to_household: "Head",
        },
      ]);
    });
};
