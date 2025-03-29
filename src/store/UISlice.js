import { createSlice } from '@reduxjs/toolkit';

const UISlice = createSlice({
  name: 'UI',
  initialState: { deviceSize: 'desktop' },
  reducers: {
    setDeviceSize: (state, { payload }) => {
      state.deviceSize = payload;
    },
  },
});

export default UISlice.reducer;

export const { setDeviceSize } = UISlice.actions;
