import React, { useCallback, useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import './Employees.css';
import { Table, TableBody, TableHead } from 'components/Table/Table';
import { Modal } from 'components';

import { Employee, selectEmployees, fetchData, selectStatus } from './data/employeeSlice';
import { Form } from './components/Form';
import EmployeeRow from './components/EmployeeRow';

function Employees() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee>({
    id: 0,
    name: '',
    email: '',
    isActive: false
  });

  const dispatch = useAppDispatch();
  const employees = useAppSelector(selectEmployees);
  const status = useAppSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const toggleModal = () => {
    setIsOpenModal((isOpen) => !isOpen);
  };

  const handleUpdate = useCallback((user: Employee) => {
    toggleModal();
    setSelectedEmployee(user);
  }, []);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <p className="text-danger">Can not get data from API</p>;
  }

  return (
    <div className="employees-page">
      <h2 className="title">Manage Employees</h2>
      <Table>
        <TableHead columns={['ID', 'Name', 'Email', 'Status', 'Action']} />
        <TableBody>
          {employees.map((employee) => {
            return <EmployeeRow key={employee.id} employee={employee} onUpdate={handleUpdate} />;
          })}
        </TableBody>
      </Table>
      <Modal title="Update Employee" isOpen={isOpenModal} onClose={toggleModal}>
        <Form selectedEmployee={selectedEmployee} onSubmit={toggleModal} />
      </Modal>
    </div>
  );
}

export default Employees;
