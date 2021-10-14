import React from 'react';
import { Switch, Route } from 'react-router';
import './App.test';
import './App.css';
import HomePage from './views/homepage';
import StorePage from './views/storepage.jsx';
import Header from './components/header/header';
import SignInSignOut from './views/sign-in-up';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/store" component={StorePage} />
        <Route path="/signin" component={SignInSignOut} />
      </Switch>
    </div>
  );
}

export default App;
