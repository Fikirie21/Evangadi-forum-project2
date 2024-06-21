const express = require("express");
const { register, login, checkUser } = require("../controllers/authController");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/check", checkUser);

module.exports = router;
