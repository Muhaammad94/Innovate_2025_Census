/**
 * @swagger
 * components:
 *   schemas:
 *     Household:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the household
 *         name:
 *           type: string
 *           description: The name of the household
 *       example:
 *         id: 1
 *         name: Smith Family
 */

/**
 * @swagger
 * tags:
 *   name: Households
 *   description: API for managing households
 */

const express = require("express");
const router = express.Router();
const householdController = require("../controllers/householdController");

/**
 * @swagger
 * /api/households:
 *   post:
 *     summary: Create a new household
 *     tags: [Households]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Household'
 *     responses:
 *       201:
 *         description: The household was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Household'
 *       400:
 *         description: Bad request
 */
router.post("/", householdController.createHousehold);

/**
 * @swagger
 * /api/households:
 *   get:
 *     summary: Get all households
 *     tags: [Households]
 *     responses:
 *       200:
 *         description: A list of households
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Household'
 */
router.get("/", householdController.getAllHouseholds);

/**
 * @swagger
 * /api/households/{id}:
 *   get:
 *     summary: Get a household by ID
 *     tags: [Households]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the household
 *     responses:
 *       200:
 *         description: The household data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Household'
 *       404:
 *         description: Household not found
 */
router.get("/:id", householdController.getHouseholdById);

/**
 * @swagger
 * /api/households/{id}:
 *   put:
 *     summary: Update a household by ID
 *     tags: [Households]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the household
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Household'
 *     responses:
 *       200:
 *         description: The updated household data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Household'
 *       404:
 *         description: Household not found
 *       400:
 *         description: Bad request
 */
router.put("/:id", householdController.updateHousehold);

/**
 * @swagger
 * /api/households/{id}:
 *   delete:
 *     summary: Delete a household by ID
 *     tags: [Households]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the household
 *     responses:
 *       200:
 *         description: The household was successfully deleted
 *       404:
 *         description: Household not found
 */
router.delete("/:id", householdController.deleteHousehold);

module.exports = router;
