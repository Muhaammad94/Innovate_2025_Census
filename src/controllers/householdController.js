const householdService = require("../services/householdService");

async function createHousehold(req, res) {
  try {
    const household = await householdService.createHousehold(req.body);
    res.status(201).json(household);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getAllHouseholds(req, res) {
  try {
    const households = await householdService.getAllHouseholds();
    res.status(200).json(households);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getHouseholdById(req, res) {
  try {
    const household = await householdService.getHouseholdById(req.params.id);
    res.status(200).json(household);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

async function updateHousehold(req, res) {
  try {
    const household = await householdService.updateHousehold(
      req.params.id,
      req.body
    );
    res.status(200).json(household);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteHousehold(req, res) {
  try {
    await householdService.deleteHousehold(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createHousehold,
  getAllHouseholds,
  getHouseholdById,
  updateHousehold,
  deleteHousehold,
};
