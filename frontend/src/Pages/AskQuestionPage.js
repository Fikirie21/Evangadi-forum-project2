import React, { useState } from "react";
import api from "../Utils/Api";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const AskQuestionPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAskQuestion = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/questions", { title, description });
      console.log("Question posted successfully", response.data);
      // Handle successful question post (e.g., redirect to questions page)
    } catch (error) {
      console.error("Failed to post question", error);
    }
  };

  return (
    <div>
      <Header />
      <main>
        <section className="ask-question-container">
          <form onSubmit={handleAskQuestion}>
            <h2>Ask a public question</h2>
            <ol>
              <li>Summarize your problem in a one-line title.</li>
              <li>Describe your problem in more detail.</li>
              <li>Describe what you tried and what you expected to happen.</li>
              <li>Review your question and post it to the site.</li>
            </ol>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              placeholder="Question Description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
            <button type="submit">Post Your Question</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AskQuestionPage;
