import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';

import './Modal.css';

export const Modal = ({ title, subTitle, theme }) => {
  const [showModal, setShowModal] = useState(false);
  const [showChldModal, setChildModal] = useState(false);

  const exitAnim = useRef(null);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    exitAnim.current.classList.add('animExit');
    setTimeout(() => setShowModal(false), '200');
  };

  const handleSwitchChildModal = () => {
    setChildModal(!showChldModal);
  };

  return (
    <div className="wrapper">
      <button onClick={handleShowModal}>Show Modal</button>
      <div className="modal_wrapper copyWrapper">
        <div className={`modal ${theme} copyModal`}>
          <div className="title copyModal">{title}</div>
          <div className="subTitle copySubtitle">{subTitle}</div>
          <button className="copyBtn">OPEN CHILD MODAL</button>
        </div>
      </div>
      {showModal && (
        <div onClick={handleHideModal} className="modal_wrapper">
          <div ref={exitAnim} onClick={(e) => e.stopPropagation()} className={`modal ${theme}`}>
            <div className="title">{title}</div>
            <div className="subTitle">{subTitle}</div>
            <button onClick={handleSwitchChildModal}>OPEN CHILD MODAL</button>
          </div>
        </div>
      )}
      {showChldModal && (
        <div onClick={handleSwitchChildModal} className="modal_wrapper modal_wrapperChild">
          <div onClick={(e) => e.stopPropagation()} className={`modal ${theme} childModal`}>
            <div className="title">{title}</div>
            <div className="subTitle">{subTitle}</div>
            <button onClick={handleSwitchChildModal}>CLOSE CHILD MODAL</button>
          </div>
        </div>
      )}
    </div>
  );
};

Modal.defaultProps = {
  title: 'Lorem ipsum',
  subTitle: 'Lorem ipsum i td tam fot',
  theme: 'dark',
};

Modal.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'bright']),
};
