import PropTypes from 'prop-types';
import React from 'react';
import { objMessage, objPath } from './consts/consts';

import './Snackbar.css';

export const Snackbar = ({ variant, message, position, slideDirection }) => {
  return (
    <div className={`testArea ${position}`}>
      <div className={`toastWrapper ${variant} ${slideDirection}`}>
        <div className="toast">
          <svg className="icon" viewBox="0 0 24 24">
            <path d={objPath[`${variant}`]}></path>
          </svg>
          <div className="text">{!message ? `This is ${objMessage[`${variant}`]} message` : `${message}`}</div>
          <div className={`closeBtn`}>
            <svg className="closeBtnIcon" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

Snackbar.defaultProps = {
  variant: 'warning',
  message: '',
  position: 'top-left',
  slideDirection: 'left',
};

Snackbar.propTypes = {
  variant: PropTypes.oneOf(['error', 'warning', 'information', 'success']),
  message: PropTypes.string,
  position: PropTypes.oneOf(['top-left', 'top-center', 'top-right', 'bottom-right', 'bottom-center', 'bottom-left']),
  slideDirection: PropTypes.oneOf(['left', 'right', 'up', 'down']),
};
