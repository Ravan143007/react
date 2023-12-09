import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/Home";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";

export default function ROUTES() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/edu" element={<Education />} />
      <Route exact path="/exp" element={<Experience />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route exact path="/skills" element={<Skills />} />

      <Route exact path="/contact" element={<Contact />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
