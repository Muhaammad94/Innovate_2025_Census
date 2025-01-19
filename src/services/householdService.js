const householdRepository = require("../repositories/householdRepository");

// Create Household
async function createHousehold(householdData) {
  // Add any required validation or extra business logic here
  return await householdRepository.createHousehold(householdData);
}

// Get All Households
async function getAllHouseholds() {
  return await householdRepository.getAllHouseholds();
}

// Get Household by ID
async function getHouseholdById(id) {
  const household = await householdRepository.getHouseholdById(id);
  if (!household) {
    throw new Error("Household not found");
  }
  return household;
}

// Update Household
async function updateHousehold(id, householdData) {
  return await householdRepository.updateHousehold(id, householdData);
}

// Delete Household
async function deleteHousehold(id) {
  return await householdRepository.deleteHousehold(id);
}

// Get Residents for Household
async function getResidentsForHousehold(householdId) {
  return await householdRepository.getResidentsForHousehold(householdId);
}

module.exports = {
  createHousehold,
  getAllHouseholds,
  getHouseholdById,
  updateHousehold,
  deleteHousehold,
  getResidentsForHousehold,
};
