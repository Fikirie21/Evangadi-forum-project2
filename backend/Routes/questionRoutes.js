

// const express = require('express');
// const { getQuestions, createQuestion, getQuestionById } = require('../controllers/questionController');
// const { authMiddleware } = require('../Middleware/authMiddleware');
// const router = express.Router();

// console.log('createQuestion:', createQuestion); // Debugging log

// router.get('/', getQuestions);
// router.get('/:id', getQuestionById);
// router.post('/', authMiddleware, createQuestion);

// module.exports = router;


const express = require("express");
const {
  getQuestions,
  createQuestion,
  getQuestionById,
} = require("../Controllers/questionController");
const { authMiddleware } = require("../middleware/authMiddleware");
const router = express.Router();

// console.log("createQuestion:", createQuestion); // Debugging log

router.get("/", getQuestions);
router.get("/:id", getQuestionById);
router.post("/", authMiddleware, createQuestion);

module.exports = router;
