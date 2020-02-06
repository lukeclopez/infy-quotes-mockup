import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store';
import Nav from './components/Navbar';
import Login from "./components/Login";
import AutoQuote from "./components/AutoQuote";
import AllTransactions from "./components/AllTransactions";
function App() {
  return (
    <Provider store={store}>
    <Router>
<Nav/>
<Switch>
<Route exact path="/new-quote" component={AutoQuote}/>
    <Route exact path="/transactions" component={AllTransactions}/>
    <Route exact path="/" component={Login}/>
</Switch>
</Router>
</Provider>
  );
}

export default App;
