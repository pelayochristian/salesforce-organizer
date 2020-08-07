import React from "react";
import Header from "./components/layout/Header";
import Organization from "./pages/Organization";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/organization" component={Organization} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
