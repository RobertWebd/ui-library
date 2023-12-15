import PropTypes from 'prop-types';
import './Radio.css';

export const Radio = ({ color, label, disabled, size, value, onChange }) => {
  return (
    <div className="radioWrapper">
      <input
        value={value}
        onChange={onChange}
        type="radio"
        id="myRadioInput"
        name="radio"
        className={`radio ${color} ${size} ${disabled ? 'disabled' : ''}`}
        disabled={disabled}
      />
      <label for="myRadioInput" />
      {label && <p>{label}</p>}
    </div>
  );
};

Radio.defaultProps = {
  color: 'red',
  label: 'Radio',
  disabled: false,
  size: 'm',
};

Radio.propTypes = {
  color: PropTypes.oneOf(['red', 'green', 'black', 'blue', 'pink']),
  label: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['s', 'm', 'l']),
};
