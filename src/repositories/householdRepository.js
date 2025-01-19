const knex = require("../../knex/knex.js");

// Create Household
async function createHousehold(householdData) {
  return await knex("households").insert(householdData).returning("*");
}

// Get All Households
async function getAllHouseholds() {
  return await knex("households").select("*");
}

// Get Household by ID
async function getHouseholdById(id) {
  return await knex("households").where("id", id).first();
}

// Update Household
async function updateHousehold(id, householdData) {
  return await knex("households")
    .where("id", id)
    .update(householdData)
    .returning("*");
}

// Delete Household
async function deleteHousehold(id) {
  return await knex("households").where("id", id).del();
}

// Get All Residents for a Household
async function getResidentsForHousehold(householdId) {
  return await knex("residents").where("household_id", householdId).select("*");
}

module.exports = {
  createHousehold,
  getAllHouseholds,
  getHouseholdById,
  updateHousehold,
  deleteHousehold,
  getResidentsForHousehold,
};
