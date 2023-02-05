import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/contactsSlice';
import s from './ContactItem.module.css';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteBtnClick = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={s.listItem}>
      {name} - {number}
      <button className={s.button} onClick={onDeleteBtnClick}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
