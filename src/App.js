import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./component/layout/Header";
import Organization from "./pages/Organization";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/organization" component={Organization} />
      </Switch>
    </div>
  );
}

export default App;
