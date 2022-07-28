import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PhoneBookForm } from '../PhoneBookForm/PhoneBookForm';
import { ContactList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import { Box, Title } from './PhoneBook.styled';
import {
  setToLocalStorage,
  getFromLocalStoreage,
} from '../../utils/localSrorageAction';

export const PhoneBook = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const isFirsRender = useRef(true);

  useEffect(() => {
    setContacts(getFromLocalStoreage());
  }, []);

  useEffect(() => {
    if (!isFirsRender.current) {
      setToLocalStorage(contacts);
    }
    isFirsRender.current = false;
  }, [contacts]);

  const submitForm = (values, { resetForm }) => {
    const isInclude = contacts.find(
      person => person.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isInclude) {
      toast(` ${values.name} is already in contacts.`);
      return;
    }

    const profile = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    setContacts(state => [...state, profile]);
    resetForm();
  };

  const onFilter = e => {
    setFilter(e.target.value);
  };

  const delateContact = id => {
    setContacts(state => state.filter(person => person.id !== id));
  };

  const filtredContacts = contacts.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Box>
      <Title>Phonebook</Title>
      <PhoneBookForm submitForm={submitForm} />
      <Filter onFilter={onFilter} filter={filter} />
      <ContactList
        contactsInfo={filtredContacts}
        delateContact={delateContact}
      />
      <ToastContainer />
    </Box>
  );
};
