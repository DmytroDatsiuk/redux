import { Contact } from 'components/Contact/Contact';
import React from 'react';
import { Item, List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { statusFilters } from 'redux/constants';
// import { getContactsFilter } from 'redux/selectors';

const getVisibleContacts = (contacts, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.all:
      return contacts.filter(contact => contact);

    case statusFilters.choosen:
      return contacts.filter(contact => contact.choosen);

    default:
      return contacts;
  }
};

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);

  const statusFilter = useSelector(state => state.filters.status);

  const visibleContacts = getVisibleContacts(contacts, statusFilter);

  return (
    <List>
      {visibleContacts.map(contact => (
        <Item key={contact.id}>
          <Contact contact={contact} />
        </Item>
      ))}
    </List>
  );
};
