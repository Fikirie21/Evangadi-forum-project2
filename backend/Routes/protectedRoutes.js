

const express = require("express");
const { authMiddleware } = require("../Middleware/authMiddleware");
const router = express.Router();

// Example of a protected route
router.get("/", authMiddleware, (req, res) => {
  res.send("This is a protected route");
});

module.exports = router;
