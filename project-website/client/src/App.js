import "./App.css";
import Home from "./pages/Homepage/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import AuthProvider from "./store/AuthProvider";
import Signin from "./pages/Authentication/Signin";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
