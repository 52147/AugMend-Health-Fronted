import { useState } from "react";
import { FormPage } from "./page/FormPage";
import { Login } from "./component/login/Login";
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
