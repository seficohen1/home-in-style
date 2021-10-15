import React from 'react';
import './form-input.scss';

const FormInput = ({ handleChnge, lable, ...restOfProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChnge} {...restOfProps} />
      {lable ? (
        <label
          className={`${
            restOfProps.value.length ? 'shrink' : ''
          } form-input-lable`}
        >
          {lable}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
