const express = require("express");
const cors = require("cors");
const formRoute = require("./routes/formRoutes");

const app = express();

// const port = 4500;
// Only parse JSON if the request body hasn't already been parsed
if (process.env.VERCEL !== "1") {
  app.use(express.json());
}

app.use(cors());

// Routes
app.use("/api/form", formRoute);

// app.get("/", (req, res) => {
//   res.send("Server Started Successfully");
// });

// app.listen(port, () => {
//   console.log(`Server listening at http://127.0.0:${port}`);
// });

// Export the app for vercel
module.exports = app;
