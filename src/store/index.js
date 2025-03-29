import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './employeesSlice';
import UISlice from './UISlice';

export default configureStore({
  reducer: {
    employees: employeesReducer,
    UI: UISlice,
  },
});
