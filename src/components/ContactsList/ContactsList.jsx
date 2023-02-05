import { useSelector } from 'react-redux';

import { ContactItem } from 'components/ContactItem/ContactItem';
import s from './ContactsList.module.css';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter.searchQuery);

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

  const filteredContacts = filterContacts();

  return filteredContacts ? (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  ) : (
    <p>Sorry, we didn't find any contact</p>
  );
};
