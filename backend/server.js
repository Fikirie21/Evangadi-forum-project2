

// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();
// const dbConnection = require('./Config/dbConfiguration');
// const authRoutes = require('./Routes/authRoutes');
// const questionRoutes = require('./Routes/questionRoutes');
// const answerRoutes = require('./Routes/answerRoutes');
// const protectedRoutes = require('./Routes/protectedRoutes'); // Ensure correct path

// const app = express();
// const port = process.env.PORT || 5702;

// // Middleware
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     credentials: true,
//   })
// );
// app.use(express.json());

// // Routes
// app.use('/api/users', authRoutes);
// app.use('/api/questions', questionRoutes);
// app.use('/api/answers', answerRoutes);
// app.use('/api/protected', protectedRoutes); // Ensure this line is correct

// // Global Error Handler
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: 'Something went wrong!' });
// });

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });




// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// const dbConnection = require("./Config/dbConfiguration");
// const authRoutes = require("./Routes/authRoutes");
// const questionRoutes = require("./Routes/questionRoutes");
// const answerRoutes = require("./Routes/answerRoutes");
// const protectedRoutes = require("./Routes/protectedRoutes"); // Ensure correct path

// const app = express();
// const port = process.env.PORT || 5702;

// // Middleware
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   })
// );
// app.use(express.json());

// // Routes
// app.use("/api/users", authRoutes);
// app.use("/api/questions", questionRoutes);
// app.use("/api/answers", answerRoutes);
// app.use("/api/protected", protectedRoutes); // Ensure this line is correct

// // Root route
// app.get("/", (req, res) => {
//   res.send("Welcome to the Evangadi Networking Platform API");
// });

// // Global Error Handler
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: "Something went wrong!" });
// });

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });const express = require('express');



const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the frontend build
app.use(express.static(path.join(__dirname, "../frontend/build")));

// API routes here (e.g., app.use('/api', apiRoutes))

// Serve the frontend app for any other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
