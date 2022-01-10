import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
