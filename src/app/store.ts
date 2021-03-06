import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import employeeReducer from '../pages/Employees/data/employeeSlice';

export const store = configureStore({
  reducer: {
    employees: employeeReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
