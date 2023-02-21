import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button } from "react-bootstrap";
import LoginPage from "./views/LoginPage";

function App() {
  return (
    <div className="App">
      <LoginPage />
    </div>
  );
}

export default App;
