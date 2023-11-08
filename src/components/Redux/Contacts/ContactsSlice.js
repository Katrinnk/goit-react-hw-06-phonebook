import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    createContact: {
      prepare: data => {
        return {
          payload: {
            ...data,
            id: data.name,
          },
        };
      },
      reducer: (state, { payload }) => {
        state.items.push(payload);
      },
    },
    deleteContact: (state, { payload }) => {
      state.items = state.items.filter(el => el.id !== payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { createContact, deleteContact } = contactsSlice.actions;
