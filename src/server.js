const app = require("./app");
const knex = require("../knex/knex.js");
const dotenv = require("dotenv");
dotenv.config(); // Loads environment variables

const port = process.env.PORT || 3000; // Default port is 3000 if not specified

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
