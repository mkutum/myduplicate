import React from "react";
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './components/Login'
import Home from './components//Home'
import Help from './components/Help'
import Rfq from './components/Rfq'
import Vendor from "./components/Vendor";
import Operator from "./components/Operator"
const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/rfq" component={Rfq} />
          <Route exact path="/vendor" component={Vendor} />
          <Route exact path="/operator" component={Operator} />
          <Route exact path="/help" component={Help} />
        </Switch>
      </Router>



    </div>
  );
}

export default App;
