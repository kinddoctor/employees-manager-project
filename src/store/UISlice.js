import { createSlice } from '@reduxjs/toolkit';

const UISlice = createSlice({
  name: 'UI',
  initialState: { deviceSize: 'desktop', sortingFunc: null },
  reducers: {
    setDeviceSize: (state, { payload }) => {
      state.deviceSize = payload;
    },
    setSortingFunc: (state, { payload }) => {
      state.sortingFunc = payload;
    },
  },
});

export default UISlice.reducer;

export const { setDeviceSize, setSortingFunc } = UISlice.actions;
