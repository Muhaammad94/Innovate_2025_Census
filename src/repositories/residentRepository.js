const knex = require("../../knex/knex.js");

// Create Resident
async function createResident(residentData) {
  return await knex("residents").insert(residentData).returning("*");
}

// Get All Residents
async function getAllResidents() {
  return await knex("residents").select("*");
}

// Get Resident by ID
async function getResidentById(id) {
  return await knex("residents").where("id", id).first();
}

// Update Resident
async function updateResident(id, residentData) {
  return await knex("residents")
    .where("id", id)
    .update(residentData)
    .returning("*");
}

// Delete Resident
async function deleteResident(id) {
  return await knex("residents").where("id", id).del();
}

// Get Residents for a Specific Household
async function getResidentsForHousehold(householdId) {
  return await knex("residents").where("household_id", householdId).select("*");
}

module.exports = {
  createResident,
  getAllResidents,
  getResidentById,
  updateResident,
  deleteResident,
  getResidentsForHousehold,
};
