const dbConnection = require("../Config/dbConfiguration");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  console.log("Register route hit");
  const { firstName, lastName, username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await dbConnection.execute(
      "INSERT INTO users (firstName, lastName, username, email, password) VALUES (?, ?, ?, ?, ?)",
      [firstName, lastName, username, email, hashedPassword]
    );
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  console.log("Login route hit");
  const { email, password } = req.body;
  try {
    const [rows] = await dbConnection.execute(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );
    if (rows.length === 0) {
      throw new Error("Invalid credentials");
    }
    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.checkUser = (req, res) => {
  res.json({ message: "User authenticated" });
};
