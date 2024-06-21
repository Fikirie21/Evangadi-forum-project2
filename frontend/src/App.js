import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import QuestionsPage from "./Pages/QuestionsPage";
import AskQuestionPage from "./Pages/AskQuestionPage";
import QuestionDetailPage from "./Pages/QuestionDetailPage";
import ProtectedPage from "./Pages/ProtectedPage";

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage />} />
    <Route path="/questions" element={<QuestionsPage />} />
    <Route path="/ask-question" element={<AskQuestionPage />} />
    <Route path="/questions/:id" element={<QuestionDetailPage />} />
    <Route path="/protected-page" element={<ProtectedPage />} />
  </Routes>
);

export default App;
