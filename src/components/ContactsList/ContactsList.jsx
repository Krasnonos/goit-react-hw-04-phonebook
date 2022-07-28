import PropTypes from 'prop-types';
import { ContactListItem } from '../ContactsListItem/ContactsListItem';
import { Title, Box, ContactsBox } from './ContactList.styled';

export const ContactList = ({ contactsInfo, delateContact }) => {
  return (
    <Box>
      <Title>Contacts</Title>
      <ContactsBox>
        {contactsInfo.map(item => (
          <ContactListItem
            item={item}
            key={item.id}
            delateContact={delateContact}
          />
        ))}
      </ContactsBox>
    </Box>
  );
};

ContactList.propTypes = {
  contactsInfo: PropTypes.arrayOf(PropTypes.shape),
};
