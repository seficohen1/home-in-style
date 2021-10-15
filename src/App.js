import React from 'react';
import { Switch, Route } from 'react-router';
import './App.test';
import './App.css';
import HomePage from './views/homepage';
import StorePage from './views/storepage.jsx';
import Header from './components/header/header';
import SignInSignOut from './views/sign-in-up';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
      isLoggedIn: false,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      console.log(user);
      this.setState({
        currentUser: user,
        isLoggedIn: true,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/store" component={StorePage} />
          <Route path="/signin" component={SignInSignOut} />
        </Switch>
      </div>
    );
  }
}

export default App;
