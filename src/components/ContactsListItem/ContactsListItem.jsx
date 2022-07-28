import PropTypes from 'prop-types';
import { BsPersonFill, BsTrash, BsTelephoneFill } from 'react-icons/bs';
import { Item, RemoveBtn } from './ContactListItem.styled';

export const ContactListItem = ({ item, delateContact }) => {
  return (
    <Item>
      <BsPersonFill />
      <p>name: {item.name}</p>
      <BsTelephoneFill />
      <p>number: {item.number}</p>
      <RemoveBtn type="button" onClick={() => delateContact(item.id)}>
        Delate <BsTrash />
      </RemoveBtn>
    </Item>
  );
};

ContactListItem.propTypes = {
  delateContact: PropTypes.func,
  item: PropTypes.objectOf(PropTypes.string),
};
