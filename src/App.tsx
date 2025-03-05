import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import AddTaskPage from "./pages/AddTaskPage";

import Header from "./components/Header";
import { Footer } from "./components/Footer";

function App() {

  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/add-task" element={<AddTaskPage/>} />

      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
