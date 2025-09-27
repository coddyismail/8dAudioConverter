import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import home from "./home.jsx";
import EightDConverter from "./EightDConverter";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/convert" element={<EightDConverter />} />
      </Routes>
    </Router>
  );
}
