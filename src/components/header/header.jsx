import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import './header.scss';
import { ReactComponent as Logo } from '../../assets/logo/crown.svg';

const Header = () => {
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
      </div>
    </div>
  );
};

export default Header;
