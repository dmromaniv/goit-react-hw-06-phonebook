import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useState, memo } from 'react';

import s from './ContactForm.module.css';

export const ContactForm = memo(({ addNewContact }) => {
  const [userInfo, setUserInfo] = useState({ name: '', number: '' });
  const { name, number } = userInfo;

  const handleChange = event => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const resetForm = () => {
    setUserInfo({ name: '', number: '' });
  };

  const handleContactFormSubmit = event => {
    event.preventDefault();

    const newContact = {
      id: uuidv4(),
      name,
      number,
    };
    addNewContact(newContact);
    resetForm();
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
          value={name}
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
          value={number}
          onChange={handleChange}
        />
      </label>

      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
});

ContactForm.propTypes = {
  addNewContact: PropTypes.func.isRequired,
};
