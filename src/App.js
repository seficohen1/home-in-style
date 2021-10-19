import React from 'react';
import { Switch, Route } from 'react-router';
import './App.test';
import './App.css';
import HomePage from './views/homepage';
import StorePage from './views/storepage.jsx';
import Header from './components/header/header';
import SignInSignOut from './views/sign-in-up';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
            isLoggedIn: true,
          });
        });
      } else {
        this.setState({
          currentUser: userAuth,
          isLoggedIn: false,
        });
      }
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
