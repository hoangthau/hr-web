import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Employee, getData, selectEmployees } from './data/employeeSlice';
import data from './data/data.json';
import './Employees.css';
import { Table, TableBody, TableHead, TableRow, TableCell } from '../../components/Table/Table';
import { Modal, Button } from '../../components';
import { Form } from './components/Form';

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

  useEffect(() => {
    dispatch(getData(data.employees));
  }, [dispatch]);

  const toggleModal = () => {
    setIsOpenModal((isOpen) => !isOpen);
  };

  const handleUpdate = (user: Employee) => {
    toggleModal();
    setSelectedEmployee(user);
  };

  return (
    <div className="employees-page">
      <h2 className="title">Manage Employees</h2>
      <Table>
        <TableHead columns={['ID', 'Name', 'Email', 'Status', 'Action']} />
        <TableBody>
          {employees.map((employee) => {
            return (
              <TableRow key={employee.id}>
                <TableCell>{employee.id}</TableCell>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.isActive ? 'ACTIVE' : 'DEACTIVATED'}</TableCell>
                <TableCell>
                  {employee.isActive && (
                    <Button variant="primary" onClick={() => handleUpdate(employee)}>
                      Update
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            );
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
