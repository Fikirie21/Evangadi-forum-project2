const express = require("express");
const { getAnswers, createAnswer } = require("../controllers/answerController");
const { authMiddleware } = require("../Middleware/authMiddleware");
const router = express.Router();

router.get("/:questionId", getAnswers);
router.post("/:questionId", authMiddleware, createAnswer);

module.exports = router;
