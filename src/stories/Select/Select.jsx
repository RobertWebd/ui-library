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
  // className: '',
  variant: 'standart',
  helperText: 'Доп. текст',
  size: 'm',
  disabled: false,
  multiple: false,
  // content: 'Robert',
  // color: 'default',
  // fontFamily: 'Poppins',
};

Select.propTypes = {
  options: PropTypes.array,
  // className: PropTypes.string,
  variant: PropTypes.oneOf(['filled', 'standart']),
  helperText: PropTypes.string,
  size: PropTypes.oneOf(['s', 'm', 'l']),
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  // content: PropTypes.string,
  // color: PropTypes.oneOf(['default', 'bloody', 'gradient']),
  // fontFamily: PropTypes.oneOf(['Poppins', 'Helvetica', 'Bodoni']),
};
