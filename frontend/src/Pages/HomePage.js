import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const HomePage = () => (
  <div>
    <Header />
    <main>
      <h2>Welcome </h2>
      <p>
        <Link to="/questions">View Questions</Link>
      </p>
      <p>
        <Link to="/ask-question">Ask a Question</Link>
      </p>
    </main>
    <Footer />
  </div>
);

export default HomePage;
