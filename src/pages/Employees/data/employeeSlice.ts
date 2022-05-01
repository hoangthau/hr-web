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
    },
    updateEmployee: (state, action: PayloadAction<Employee>) => {
      const updatedData = state.data.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
      state.data = updatedData;
    }
  }
});

export const { getData, updateEmployee } = employeeSlice.actions;

export const selectEmployees = (state: RootState) => state.employees.data;

export default employeeSlice.reducer;
