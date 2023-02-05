import { useState, useEffect, useCallback } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { Section } from './Section/Section';

import {
  getContactsFromLocalStorage,
  setContactsToLocalStorage,
} from 'services/localStorage';

export const App = () => {
  const [contacts, setContacts] = useState(getContactsFromLocalStorage());
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setContactsToLocalStorage(contacts);
  }, [contacts]);

  const addNewContact = useCallback(
    newContact => {
      const contactExists = contacts.find(
        contact => contact.name.toUpperCase() === newContact.name.toUpperCase()
      );

      if (contactExists) {
        alert(`${newContact.name} is already in contacts`);
      } else {
        setContacts([...contacts, newContact]);
      }
    },
    [contacts]
  );

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const setContactFilter = filterQuery => {
    setFilter(filterQuery);
  };

  const filterContacts = () => {
    const trimmedFilter = filter.toUpperCase().trim();
    if (trimmedFilter) {
      const filteredContacts = contacts.filter(contact =>
        contact.name.toUpperCase().includes(trimmedFilter)
      );
      return filteredContacts.length !== 0 ? filteredContacts : null;
    }
    return contacts;
  };

  return (
    <Section>
      <div>
        <h1>Phonebook</h1>
        <ContactForm addNewContact={addNewContact} />

        <h2>Contacts</h2>
        <Filter setContactFilter={setContactFilter} />
        <ContactsList
          contacts={filterContacts()}
          deleteContact={deleteContact}
        />
      </div>
    </Section>
  );
};
