import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../Utils/Api";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const QuestionsPage = () => {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await api.get("/questions");
        setQuestions(response.data);
      } catch (error) {
        console.error("Failed to fetch questions", error);
        setError("Failed to fetch questions. Please try again.");
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <section className="questions-container">
          <h2>Questions</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <ul>
            {questions.map((question) => (
              <li key={question.id}>
                <Link to={`/questions/${question.id}`}>{question.title}</Link>{" "}
                by {question.username}
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QuestionsPage;
