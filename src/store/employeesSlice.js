import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const employeesAdapter = createEntityAdapter();
const initialState = employeesAdapter.getInitialState();

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: employeesAdapter.addOne,
    addEmployees: employeesAdapter.addMany,
    updateEmployee: employeesAdapter.updateOne,
  },
});

export const { addEmployee, addEmployees, updateEmployee } = employeesSlice.actions;

export const employeesSelectors = employeesAdapter.getSelectors(
  (state) => state.employees,
);

export default employeesSlice.reducer;
