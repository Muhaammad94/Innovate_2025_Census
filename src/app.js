const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const setupSwaggerDocs = require("../swagger");

// Import routes
const householdRoutes = require("./routes/householdRoutes");
const residentRoutes = require("./routes/residentRoutes");

// Health check route
app.get("/health", (req, res) => {
  res.status(200).send("OK"); // Sends an "OK" message for health check
});

// Middlewares
app.use(bodyParser.json());

// Register routes
app.use("/api/households", householdRoutes);
app.use("/api/residents", residentRoutes);

// Setup Swagger
setupSwaggerDocs(app);

module.exports = app;
