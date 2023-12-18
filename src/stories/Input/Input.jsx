import PropTypes from 'prop-types';
import './Input.css';

export const Input = ({
  className,
  variant,
  color,
  size,
  value,
  placeholder,
  label,
  disabled,
  error,
  tabIndex,
  ...props
}) => {
  return (
    <div className="wrapper">
      {label && <label>{label}</label>}
      <input
        className={`input ${className} ${variant} ${color} ${size} ${error ? 'error' : ''}`}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        tabIndex={tabIndex}
        {...props}
      />
    </div>
  );
};

Input.defaultProps = {
  className: '',
  variant: 'standart',
  color: 'secondary',
  value: '',
  placeholder: 'Enter value',
  size: 'm',
  label: '',
  disabled: false,
  error: false,
};

Input.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['standart', 'filled', 'outlined']),
  color: PropTypes.oneOf(['secondary', 'success', 'warning']),
  value: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['s', 'm', 'l']),
  label: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
};
