import { nanoid } from 'nanoid';

export const addContact = (name, number) => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name,
      number,
      choosen: false,
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};

export const toggleChoosen = contactId => {
  return {
    type: 'contacts/toggleChoosen',
    payload: contactId,
  };
};

export const contactFilter = value => {
  return {
    type: 'contacts/contactFilter',
    payload: value.toLowerCase(),
  };
};

export const setStatusFilter = value => {
  return {
    type: 'filters/setStatusFilter',
    payload: value,
  };
};
