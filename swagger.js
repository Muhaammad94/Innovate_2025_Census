const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Basic metadata for Swagger
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Census System API",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000", // Replace with your server's URL
      },
    ],
  },
  apis: ["./src/routes/*.js"], // Path to the route files with Swagger comments
};

// Generate the Swagger documentation
const swaggerSpec = swaggerJsdoc(options);

const setupSwaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("Swagger UI is available at http://localhost:3000/api-docs");
};

module.exports = setupSwaggerDocs;
