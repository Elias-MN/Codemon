import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import RegisterForm  from "./components/Signup";
import { UserInfo } from "./components/UserInfo";



function App() {

  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/singup" element={<RegisterForm/>} />
        <Route path="/profilepage" element={<UserInfo/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
