import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Employee, getData, selectEmployees, updateEmployee } from './data/employeeSlice';
import data from './data/data.json';
import './Employees.css';
import { Table, TableBody, TableHead, TableRow, TableCell } from '../../components/Table';
import { Modal } from '../../components/Modal';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

function Employees() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee>({
    id: 0,
    name: '',
    email: '',
    isActive: false
  });
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [status, setStatus] = useState<boolean>(true);

  const dispatch = useAppDispatch();
  const employees = useAppSelector(selectEmployees);

  useEffect(() => {
    dispatch(getData(data.employees));
  }, [dispatch]);

  useEffect(() => {
    setName(selectedEmployee.name);
    setEmail(selectedEmployee.email);
    setStatus(selectedEmployee.isActive);
  }, [selectedEmployee]);

  const toggleModal = () => {
    setIsOpenModal((isOpen) => !isOpen);
  };

  const handleUpdate = (user: Employee) => {
    toggleModal();
    setSelectedEmployee(user);
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleStatus = () => {
    setStatus((status) => !status);
  };

  const handleSave = () => {
    const employee = {
      id: selectedEmployee.id,
      name,
      email,
      isActive: status
    };
    console.log(employee);
    dispatch(updateEmployee(employee));
    toggleModal();
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
      <Modal
        title="Update Employee"
        isOpen={isOpenModal}
        onClose={toggleModal}
        onSubmit={handleSave}>
        <form>
          <div className="mb-3 row">
            <label htmlFor="name" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <TextInput
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={handleName}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <TextInput
                type="text"
                className="form-control"
                id="email"
                value={email}
                onChange={handleEmail}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Status</label>
            <div className="col-sm-10">
              <div className="form-check form-switch">
                <TextInput
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  checked={status}
                  onChange={handleStatus}
                />
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Employees;
