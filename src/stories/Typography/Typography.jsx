import PropTypes from 'prop-types';
import './Typography.css';

export const Typography = ({ className, variant, content, color, fontFamily, ...props }) => {
  const Variant = variant;
  return (
    <Variant className={`typography ${className} ${color} ${fontFamily}`} {...props}>
      {content}
    </Variant>
  );
};

Typography.defaultProps = {
  className: '',
  variant: 'h1',
  content: 'Robert',
  color: 'default',
  fontFamily: 'Poppins',
};

Typography.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  content: PropTypes.string,
  color: PropTypes.oneOf(['default', 'bloody', 'gradient']),
  fontFamily: PropTypes.oneOf(['Poppins', 'Helvetica', 'Bodoni']),
};
