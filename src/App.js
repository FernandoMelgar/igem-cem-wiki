import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home_page";
import Laboratory from "./pages/laboratory_page";
import LogBookPage from "./pages/logbook_page";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<LogBookPage />} />
      </Routes>
      <Laboratory></Laboratory>
    </div>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
