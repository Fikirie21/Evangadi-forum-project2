

const dbConnection = require('../Config/dbConfiguration'); 
exports.getQuestions = async (req, res) => {
  try {
    const [questions] = await dbConnection.execute(
      `SELECT questions.*, users.username 
       FROM questions 
       JOIN users ON questions.userId = users.id`
    );
    res.json(questions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getQuestionById = async (req, res) => {
  const { id } = req.params;
  try {
    const [questions] = await dbConnection.execute(
      `SELECT questions.*, users.username 
       FROM questions 
       JOIN users ON questions.userId = users.id 
       WHERE questions.id = ?`,
      [id]
    );
    if (questions.length === 0) {
      return res.status(404).json({ error: 'Question not found' });
    }
    const [answers] = await dbConnection.execute(
      `SELECT answers.*, users.username 
       FROM answers 
       JOIN users ON answers.userId = users.id 
       WHERE questionId = ?`,
      [id]
    );
    const question = questions[0];
    question.answers = answers;
    res.json(question);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.createQuestion = async (req, res) => {
  console.log('createQuestion called'); // Add this line to debug
  const { title, description } = req.body;
  try {
    await dbConnection.execute(
      'INSERT INTO questions (title, description, userId) VALUES (?, ?, ?)',
      [title, description, req.user.userId]
    );
    res.status(201).json({ message: 'Question created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
