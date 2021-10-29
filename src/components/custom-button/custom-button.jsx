import React from 'react';
import { CustomButtonContainer } from './custom-button.styles';

const CustonButton = (props) => {
  return (
    <CustomButtonContainer {...props}>{props.children}</CustomButtonContainer>
  );
};

export default CustonButton;
