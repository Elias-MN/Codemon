import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import { Footer } from "./components/Footer";
import Info from "./components/Info";
import Hero from "./components/Hero";
import { Stadistics } from "./components/Stadistics";
import { useAuth } from "./context/AuthContext";
import HomePage from "./pages/HomePage";

function App() {
  const { currentUser } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
