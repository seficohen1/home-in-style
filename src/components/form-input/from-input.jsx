import React from 'react';
import './form-input.scss';

const FormInput = ({ handleChnge, lable, ...restOfProps }) => {
  console.log('rest of props', restOfProps.value);
  return (
    <div className="group">
      <input className="form-input" onChange={handleChnge} {...restOfProps} />
      {lable ? (
        <label className={`${restOfProps ? 'shrink' : ''} form-input-lable`}>
          {lable}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
