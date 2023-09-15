import PropTypes from 'prop-types';
import './Checkbox.css';

export const Checkbox = ({ className, color, label, checked, disabled, size, ...props }) => {
  return (
    <label className="custom-checkbox">
      <input className="hidden-checkbox" type="checkbox" checked={checked}></input>
      <div className={`checkbox ${color} ${size} `} disabled={disabled} {...props} type="Checkbox">
        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="#ffffff" d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
        </svg>
      </div>
      {label}
    </label>
  );
};

Checkbox.defaultProps = {
  className: '',
  color: 'secondary',
  label: 'checkbox',
  disabled: false,
  checked: false,
  size: 'm',
};

Checkbox.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']),
  label: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  size: PropTypes.oneOf(['s', 'm', 'l']),
};
