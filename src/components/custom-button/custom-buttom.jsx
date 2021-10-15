import React from 'react';
import './custom-button.scss';

const CustonButton = ({ children, isGoogleSignIn, ...restOfProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...restOfProps}
    >
      {children}
    </button>
  );
};

export default CustonButton;
