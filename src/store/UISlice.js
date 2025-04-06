import { createSlice } from '@reduxjs/toolkit';

const defaultFilters = {
  categories: [
    { id: 1, name: 'role', type: 'fullInclusive' },
    { id: 2, name: 'status', type: 'partiallyInclusive' },
  ],
  options: [
    { categoryId: 1, id: 30, value: 'driver', isChecked: true },
    { categoryId: 1, id: 31, value: 'waiter', isChecked: true },
    { categoryId: 1, id: 32, value: 'cook', isChecked: true },
    { categoryId: 2, id: 33, value: 'archived', isChecked: true },
    { categoryId: 2, id: 34, value: 'working', default: true },
  ],
};

const UISlice = createSlice({
  name: 'UI',
  initialState: { deviceSize: 'desktop', sortingFunc: null, filters: defaultFilters },
  reducers: {
    setDeviceSize: (state, { payload }) => {
      state.deviceSize = payload;
    },
    setSortingFunc: (state, { payload }) => {
      state.sortingFunc = payload;
    },
    setFilters: (state, { payload }) => {
      if (payload === 'default') {
        state.filters = defaultFilters;
      } else {
        const filterToChange = state.filters.options.filter(
          ({ id }) => id === payload,
        )[0];
        filterToChange.isChecked = !filterToChange.isChecked;
      }
    },
  },
});

export default UISlice.reducer;

export const { setDeviceSize, setSortingFunc, setFilters } = UISlice.actions;
