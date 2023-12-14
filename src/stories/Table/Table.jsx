import PropTypes from 'prop-types';
import './Table.css';

export const Table = ({ headArr, rowArr, theme, stickyHeader, caption }) => {
  return (
    <div className="table_wrapper">
      <table className={`table ${theme}`}>
        <caption className={`${theme}`}>{caption}</caption>

        <thead>
          <tr className="headRow">
            {headArr.map((head, index) => {
              return (
                <th key={index} className={`th ${!index && 'name'} ${stickyHeader && 'stickyHeader'}`}>
                  {head}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rowArr.map((row, index) => (
            <tr key={index} className="trTd">
              {row.map((name, nameIndex) => (
                <td key={name} className={`td ${!nameIndex && 'name'} ${theme}`}>
                  {name}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.defaultProps = {
  headArr: ['Dessert (100g serving)', 'Calories', 'Fat (g)', 'Carbs(g)', 'Protein (g)'],
  rowArr: [
    ['Frozen yoghurt', '159', '6', '24', '4'],
    ['Ice cream sandwich', '237', '9', '37', '4.3'],
    ['Eclair', '262', '16', '24', '6'],
    ['Cupcake', '305', '3.7', '67', '4.3'],
    ['Gingerbread', '356', '16', '49', '3.9'],
  ],
  theme: 'dark',
  stickyHeader: false,
  caption: 'PFC',
};

Table.propTypes = {
  headArr: PropTypes.array,
  rowArr: PropTypes.array,
  theme: PropTypes.oneOf(['dark', 'bright']),
  stickyHeader: PropTypes.bool,
  caption: PropTypes.string,
};
