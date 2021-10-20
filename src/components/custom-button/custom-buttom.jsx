import React from 'react';
import './custom-button.scss';

const CustonButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...restOfProps
}) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'google-sign-in' : ''
      } custom-button`}
      {...restOfProps}
    >
      {children}
    </button>
  );
};

export default CustonButton;
