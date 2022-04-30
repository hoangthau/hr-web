import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';

export interface Employee {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

export interface EmployeesState {
  data: Array<Employee>;
}

const initialState: EmployeesState = {
  data: []
};

export const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    getData: (state, action: PayloadAction<Array<Employee>>) => {
      state.data = action.payload;
    }
  }
});

export const { getData } = employeeSlice.actions;

export const selectEmployees = (state: RootState) => state.employees.data;

export default employeeSlice.reducer;
