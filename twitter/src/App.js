import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Regsiter from './components/register.component';
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";
import Logout from "./components/logout";
import LeftPane from "./components/leftpane/leftpane";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="container m-0 p-0" style={{minWidth: "100%", minHeight: "100%"}}>
              <div className="row">
                <div className="col-4 border-right">
                  <LeftPane />
                </div>
                <div className="col-8 border">
                  <Home />
                </div>
              </div>
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
