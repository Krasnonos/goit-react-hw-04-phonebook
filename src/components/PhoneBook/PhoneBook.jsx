import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { PhoneBookForm } from '../PhoneBookForm/PhoneBookForm';
import { ContactList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import { Box, Title } from './PhoneBook.styled';
import {
  addToLoacalStorage,
  getFromLocalStoreage,
  removeFromLocalStorage,
} from '../../utils/localSrorageAction';

export class PhoneBook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    this.setState({ contacts: getFromLocalStoreage() });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length < this.state.contacts.length) {
      addToLoacalStorage(this.state.contacts);
    }

    if (prevState.contacts.length > this.state.contacts.length) {
      removeFromLocalStorage(this.state.contacts);
    }
  }

  submitForm = (values, { resetForm }) => {
    const isInclude = this.state.contacts.find(
      person => person.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isInclude) {
      alert(` ${values.name} is already in contacts.`);
      return;
    }

    const profile = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    this.setState(prevState => {
      return {
        contacts: [profile, ...prevState.contacts],
      };
    });

    resetForm();
  };

  onFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  delateContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(person => person.id !== id),
      };
    });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const filtredContacts = this.state.contacts.filter(person =>
      person.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Box>
        <Title>Phonebook</Title>
        <PhoneBookForm submitForm={this.submitForm} />
        <Filter onFilter={this.onFilter} filter={this.state.filter} />
        <ContactList
          contactsInfo={filtredContacts}
          delateContact={this.delateContact}
        />
      </Box>
    );
  }
}
