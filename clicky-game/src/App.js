import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import header from "./components/pages/header";
import './components/App.css';
// import footer from "./components/pages/footer;";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={header} />
        {/* <footer /> */}
      </div>
    </Router>
  );
}

export default App;
