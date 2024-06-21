import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../Utils/Api";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    try {
      const response = await api.post("/users/login", {
        email,
        password,
      });
      // console.log("Login successful", response.data);
      localStorage.setItem("token", response.data.token); // Store token
      navigate("/protected-page"); // Redirect to a protected route
    } catch (error) {
      if (error.response) {
        console.error("Login failed with response error:", error.response.data);
        setError(
          error.response.data.error ||
            "Login failed. Please check your details and try again."
        );
      } else if (error.request) {
        console.error("Login failed with request error:", error.request);
        setError("No response from server. Please try again later.");
      } else {
        console.error("Login failed with error:", error.message);
        setError("Login failed. Please try again.");
      }
    }
  };

  return (
    <div className="app-container">
      <Header />
      <main>
        <section className="login-container">
          <form onSubmit={handleLogin}>
            <h2>Login to your account</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
            <p>
              Don't have an account?{" "}
              <Link to="/signup">Create a new account</Link>
            </p>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
