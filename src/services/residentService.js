const residentRepository = require("../repositories/residentRepository");

// Create Resident
async function createResident(residentData) {
  return await residentRepository.createResident(residentData);
}

// Get All Residents
async function getAllResidents() {
  return await residentRepository.getAllResidents();
}

// Get Resident by ID
async function getResidentById(id) {
  const resident = await residentRepository.getResidentById(id);
  if (!resident) {
    throw new Error("Resident not found");
  }
  return resident;
}

// Update Resident
async function updateResident(id, residentData) {
  return await residentRepository.updateResident(id, residentData);
}

// Delete Resident
async function deleteResident(id) {
  return await residentRepository.deleteResident(id);
}

// Get Residents in a Household
async function getResidentsInHousehold(householdId) {
  return await residentRepository.getResidentsForHousehold(householdId);
}

module.exports = {
  createResident,
  getAllResidents,
  getResidentById,
  updateResident,
  deleteResident,
  getResidentsInHousehold,
};
