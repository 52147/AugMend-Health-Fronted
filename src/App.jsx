import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./component/nav-bar/NavBar";
import { Footer } from "./component/footer/Footer";
import { FormPage } from "./page/FormPage";
import { Login } from "./component/login/Login";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
      setIsAuthenticated(true);
  };

  return (
      <div>
          {isAuthenticated ? <FormPage /> : <Login onLoginSuccess={handleLoginSuccess} />}
      </div>
  );
}

export default App;
