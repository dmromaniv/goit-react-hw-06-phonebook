import { createSlice } from '@reduxjs/toolkit';
import { getContactsFromLocalStorage } from 'services/localStorage';
import { v4 as uuidv4 } from 'uuid';

const contactsInitialState = getContactsFromLocalStorage();

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: uuidv4(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
