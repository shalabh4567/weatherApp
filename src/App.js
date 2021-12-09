import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import FrontPageDisplay from "./components/FrontPageDisplay";
import Error from "./components/Error";

function App() {
  return (
    <>
      <div>
        <Router>
          <Switch>
            <Route exact path="/weather" component={FrontPageDisplay} />
            <Route exact path="/error" component={Error} />
            <Redirect to="/weather" />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
