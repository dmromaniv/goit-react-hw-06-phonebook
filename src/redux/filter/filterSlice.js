import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = { searchQuery: '' };

export const contactsSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    changeFilter(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

export const filterReducer = contactsSlice.reducer;
export const { changeFilter } = contactsSlice.actions;
