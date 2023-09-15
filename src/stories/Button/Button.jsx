import PropTypes from 'prop-types';
import './Button.css';

export const Button = ({ className, variant, color, content, icon, disabled, size, ...props }) => {
  return (
    <button className={`button ${className} ${variant} ${color} ${size}`} disabled={disabled} {...props}>
      <div className="content">
        {icon}
        {content}
      </div>
    </button>
  );
};

Button.defaultProps = {
  className: '',
  variant: 'filled',
  color: 'primary',
  content: 'Button',
  disabled: false,
  size: 'm',
};

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['filled', 'outlined']),
  color: PropTypes.oneOf(['primary', 'secondary']),
  content: PropTypes.string,
  icon: PropTypes.node,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['s', 'm', 'l']),
};
