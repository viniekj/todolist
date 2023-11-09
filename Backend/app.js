const express = require("express");
const app = express();
const taskController = require("./controllers/taskController");
const PORT = process.env.PORT || 3333;
require("dotenv").config();

// Middleware
app.use(express.json()); // Example: Body parsing middleware

// Routes
app.get("/", taskController.getAll);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
