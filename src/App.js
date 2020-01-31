import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Navbar'
import Login from "./components/Login";
import AutoQuote from "./components/AutoQuote";
function App() {
  return (
    <Router>
<Nav/>
<Switch>
<Route exact path="/quote" component={AutoQuote}/>
    <Route exact path="/" component={Login}/>
</Switch>
</Router>
  );
}

export default App;
