import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './Contacts/ContactsSlice';
import { filterReducer } from './Filter/FilterSlice';

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
