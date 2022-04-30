import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getData, selectEmployees } from './data/employeeSlice';
import data from './data/data.json';
import './Employees.css';
import { Table } from '../../components';

function Employees() {
  const dispatch = useAppDispatch();
  const employees = useAppSelector(selectEmployees);

  useEffect(() => {
    dispatch(getData(data.employees));
  }, [dispatch]);

  return (
    <div className="employees-page">
      <h2>Manage Employees</h2>
      <Table rows={employees} columns={['ID', 'Name', 'Email', 'Status', 'Action']} />
    </div>
  );
}

export default Employees;
