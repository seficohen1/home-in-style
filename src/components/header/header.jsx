import React from 'react';

import { Link } from 'react-router-dom';
import './header.scss';
import { ReactComponent as Logo } from '../../assets/logo/crown.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/store">
          STORE
        </Link>
        <Link className="option" to="/store">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
