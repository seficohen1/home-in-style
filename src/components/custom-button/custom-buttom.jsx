import React from 'react';
import './custom-button.scss';

const CustonButton = ({ children, ...restOfProps }) => {
  return (
    <button className="custom-button" {...restOfProps}>
      {children}
    </button>
  );
};

export default CustonButton;
