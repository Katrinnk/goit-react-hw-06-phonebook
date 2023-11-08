import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: '',
  },
  reducers: {
    saveFilter: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { saveFilter } = filterSlice.actions;
