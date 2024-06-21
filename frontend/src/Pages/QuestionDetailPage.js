import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../Utils/Api";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const QuestionDetailPage = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState("");

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await api.get(`/questions/${id}`);
        setQuestion(response.data);
        setAnswers(response.data.answers);
      } catch (error) {
        console.error("Failed to fetch question details", error);
      }
    };
    fetchQuestion();
  }, [id]);

  const handleAnswerSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(`/questions/${id}/answers`, {
        content: newAnswer,
      });
      setAnswers([...answers, response.data]);
      setNewAnswer("");
    } catch (error) {
      console.error("Failed to submit answer", error);
    }
  };

  if (!question) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <main>
        <section className="question-detail-container">
          <h2>{question.title}</h2>
          <p>{question.description}</p>
          <h3>Answers</h3>
          <ul>
            {answers.map((answer) => (
              <li key={answer.id}>
                {answer.content} by {answer.username}
              </li>
            ))}
          </ul>
          <form onSubmit={handleAnswerSubmit}>
            <textarea
              placeholder="Your Answer..."
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
              required
            ></textarea>
            <button type="submit">Post Your Answer</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QuestionDetailPage;
