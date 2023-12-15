import PropTypes from 'prop-types';
import './Select.css';

export const Select = ({ options, variant, helperText, disabled, size, multiple }) => {
  return (
    <div className="select_wrapper">
      <select className={`select ${variant} ${disabled && 'disabled'} ${size}`} disabled={disabled} multiple={multiple}>
        {options.map((option) => (
          <option>{option}</option>
        ))}
      </select>
      <div className="helperText">{helperText}</div>
    </div>
  );
};

Select.defaultProps = {
  options: ['девешле', 'популярное', 'дороже'],
  variant: 'standart',
  helperText: 'Доп. текст',
  size: 'm',
  disabled: false,
  multiple: false,
};

Select.propTypes = {
  options: PropTypes.array,
  variant: PropTypes.oneOf(['filled', 'standart']),
  helperText: PropTypes.string,
  size: PropTypes.oneOf(['s', 'm', 'l']),
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
};
