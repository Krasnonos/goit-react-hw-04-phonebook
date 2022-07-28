import PropTypes from 'prop-types';
import { InputLable, InputBox } from './Filter.styled';

export const Filter = ({ filter, onFilter }) => {
  return (
    <InputLable>
      Find contacts by name
      <InputBox type="text" name="filter" value={filter} onChange={onFilter} />
    </InputLable>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func,
  filter: PropTypes.string,
};
