import React from 'react';

export const Radio = () => {
  return (
    <Fragment>
      <input
        type="radio"
        id="myRadioInput"
        name="radio"
        className={`radio ${color} ${size} ${disabled ? 'disabled' : ''}`}
        disabled={disabled}
      />
      <label for="myRadioInput" />
    </Fragment>
  );
};
