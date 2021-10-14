import React from 'react';
import { Switch, Route } from 'react-router';
import './App.test';
import './App.css';
import HomePage from './views/homepage';
import StorePage from './views/storepage.jsx';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/store" component={StorePage} />
      </Switch>
    </div>
  );
}

export default App;
