const residentService = require("../services/residentService");

async function createResident(req, res) {
  try {
    const resident = await residentService.createResident(req.body);
    res.status(201).json(resident);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getAllResidents(req, res) {
  try {
    const residents = await residentService.getAllResidents();
    res.status(200).json(residents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getResidentById(req, res) {
  try {
    const resident = await residentService.getResidentById(req.params.id);
    res.status(200).json(resident);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

async function updateResident(req, res) {
  try {
    const resident = await residentService.updateResident(
      req.params.id,
      req.body
    );
    res.status(200).json(resident);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteResident(req, res) {
  try {
    await residentService.deleteResident(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createResident,
  getAllResidents,
  getResidentById,
  updateResident,
  deleteResident,
};
