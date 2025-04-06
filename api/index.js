const app = require("../server"); // Import the Express app
const serverless = require("serverless-http"); // Adapter to make Express compatible

module.exports = serverless(app);
