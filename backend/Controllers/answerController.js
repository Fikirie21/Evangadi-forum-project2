const dbConnection = require("../Config/dbConfiguration");

exports.getAnswers = async (req, res) => {
  const { questionId } = req.params;
  try {
    const [answers] = await dbConnection.execute(
      `SELECT answers.*, users.username 
       FROM answers 
       JOIN users ON answers.userId = users.id 
       WHERE questionId = ?`,
      [questionId]
    );
    res.json(answers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.createAnswer = async (req, res) => {
  const { questionId } = req.params;
  const { content } = req.body;
  try {
    await dbConnection.execute(
      "INSERT INTO answers (content, questionId, userId) VALUES (?, ?, ?)",
      [content, questionId, req.user.userId]
    );
    res.status(201).json({ message: "Answer created successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

