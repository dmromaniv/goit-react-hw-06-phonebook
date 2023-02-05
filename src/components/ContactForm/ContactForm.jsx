import { useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/contacts/contactsSlice';
import s from './ContactForm.module.css';

export const ContactForm = memo(() => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({ name: '', number: '' });

  const handleChange = event => {
    const { name, value } = event.target;
    setUserInfo(prevState => ({ ...prevState, [name]: value }));
  };

  const resetForm = () => {
    setUserInfo({ name: '', number: '' });
  };

  const handleContactFormSubmit = event => {
    event.preventDefault();

    const contactExists = contacts.find(
      contact => contact.name.toUpperCase() === userInfo.name.toUpperCase()
    );

    if (contactExists) {
      alert(`${userInfo.name} is already in contacts`);
    } else {
      dispatch(addContact(userInfo));
      resetForm();
    }
  };

  return (
    <form className={s.form} onSubmit={handleContactFormSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={userInfo.name}
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={userInfo.number}
          onChange={handleChange}
        />
      </label>

      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
});
