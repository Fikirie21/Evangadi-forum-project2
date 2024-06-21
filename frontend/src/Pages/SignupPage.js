import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../Utils/Api";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const SignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    try {
      const response = await api.post("/users/register", {
        firstName,
        lastName,
        username,
        email,
        password,
      });
      // console.log("Signup successful", response.data);
      navigate("/login"); // Redirect to login page after successful registration
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error(
          "Signup failed with response error:",
          error.response.data
        );
        setError(
          error.response.data.error ||
            "Signup failed. Please check your details and try again."
        );
      } else if (error.request) {
        // Request was made but no response received
        console.error("Signup failed with request error:", error.request);
        setError("No response from server. Please try again later.");
      } else {
        // Something happened in setting up the request
        console.error("Signup failed with error:", error.message);
        setError("Signup failed. Please try again.");
      }
    }
  };

  return (
    <div className="app-container">
      <Header />
      <main>
        <section className="signup-container">
          <form onSubmit={handleSignup}>
            <h2>Join the network</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Agree and Join</button>
            <p>
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SignupPage;
