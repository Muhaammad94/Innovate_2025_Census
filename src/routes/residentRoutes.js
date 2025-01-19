/**
 * @swagger
 * components:
 *   schemas:
 *     Resident:
 *       type: object
 *       required:
 *         - name
 *         - age
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the resident
 *         name:
 *           type: string
 *           description: The name of the resident
 *         age:
 *           type: integer
 *           description: The age of the resident
 *       example:
 *         id: 1
 *         name: John Doe
 *         age: 45
 */

/**
 * @swagger
 * tags:
 *   name: Residents
 *   description: API for managing residents
 */

const express = require("express");
const router = express.Router();
const residentController = require("../controllers/residentController");

/**
 * @swagger
 * /api/residents:
 *   post:
 *     summary: Create a new resident
 *     tags: [Residents]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Resident'
 *     responses:
 *       201:
 *         description: The resident was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Resident'
 *       400:
 *         description: Bad request
 */
router.post("/", residentController.createResident);

/**
 * @swagger
 * /api/residents:
 *   get:
 *     summary: Get all residents
 *     tags: [Residents]
 *     responses:
 *       200:
 *         description: A list of residents
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Resident'
 */
router.get("/", residentController.getAllResidents);

/**
 * @swagger
 * /api/residents/{id}:
 *   get:
 *     summary: Get a resident by ID
 *     tags: [Residents]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the resident
 *     responses:
 *       200:
 *         description: The resident data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Resident'
 *       404:
 *         description: Resident not found
 */
router.get("/:id", residentController.getResidentById);

/**
 * @swagger
 * /api/residents/{id}:
 *   put:
 *     summary: Update a resident by ID
 *     tags: [Residents]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the resident
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Resident'
 *     responses:
 *       200:
 *         description: The updated resident data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Resident'
 *       404:
 *         description: Resident not found
 *       400:
 *         description: Bad request
 */
router.put("/:id", residentController.updateResident);

/**
 * @swagger
 * /api/residents/{id}:
 *   delete:
 *     summary: Delete a resident by ID
 *     tags: [Residents]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the resident
 *     responses:
 *       200:
 *         description: The resident was successfully deleted
 *       404:
 *         description: Resident not found
 */
router.delete("/:id", residentController.deleteResident);

module.exports = router;
