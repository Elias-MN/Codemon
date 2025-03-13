import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import RegisterForm  from "./components/Signup";
import { UserInfo } from "./components/UserInfo";
import  TaskListPage from "./pages/TaskListPage";
import  LoginPage from "./pages/LoginPage";




function App() {

  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recursos" element={<TaskListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterForm/>} />
        <Route path="/profilepage" element={<UserInfo/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
