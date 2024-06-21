import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const ProtectedPage = () => {
  return (
    <div className="app-container">
      <Header />
      <main>
        <h2>Welcome to the protected page!</h2>
        <p>This page is only accessible to authenticated users.</p>
      </main>
      <Footer />
    </div>
  );
};

export default ProtectedPage;
