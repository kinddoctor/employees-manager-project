import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './employeesSlice';
import UISliceReducer from './UISlice';

export default configureStore({
  reducer: {
    employees: employeesReducer,
    UI: UISliceReducer,
  },
});
