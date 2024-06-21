


// const jwt = require("jsonwebtoken");

// exports.authMiddleware = async (req, res, next) => {
//   try {
//     const token = req.header("Authorization").replace("Bearer ", "");
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(401).json({ error: "Please authenticate" });
//   }
// };

// const jwt = require("jsonwebtoken");
// const { StatusCodes } = require("http-status-codes");

// const authMiddleware = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res
//       .status(StatusCodes.UNAUTHORIZED)
//       .json({ msg: "Authentication invalid" });
//   }
//   const token = authHeader.split(" ")[1];

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = { userid: decoded.userid, username: decoded.username };
//     next();
//   } catch (error) {
//     return res
//       .status(StatusCodes.UNAUTHORIZED)
//       .json({ msg: "Authentication invalid" });
//   }
// };

// module.exports = authMiddleware;


// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');

exports.authMiddleware = (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Please authenticate' });
  }
};
