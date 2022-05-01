import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import employeesData from './data.json';
export interface Employee {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

export interface EmployeesState {
  data: Array<Employee>;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: EmployeesState = {
  data: [],
  status: 'idle'
};

function fetchMockData() {
  return new Promise<{ data: { employees: Array<Employee> } }>((resolve) =>
    setTimeout(() => resolve({ data: employeesData }), 500)
  );
}

export const fetchData = createAsyncThunk('employees/fetchData', async () => {
  const response = await fetchMockData();
  return response.data;
});

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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload.employees;
      })
      .addCase(fetchData.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export const { getData, updateEmployee } = employeeSlice.actions;

export const selectEmployees = (state: RootState) => state.employees.data;
export const selectStatus = (state: RootState) => state.employees.status;

export default employeeSlice.reducer;
