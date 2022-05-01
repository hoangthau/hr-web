import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { Employee, updateEmployee } from '../data/employeeSlice';
import { TextInput, Switch } from '../../../components';

interface FormProps {
  selectedEmployee: Employee;
  onSubmit: () => void;
}

export function Form({ selectedEmployee, onSubmit }: FormProps) {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [status, setStatus] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setName(selectedEmployee.name);
    setEmail(selectedEmployee.email);
    setStatus(selectedEmployee.isActive);
  }, [selectedEmployee]);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleStatus = () => {
    setStatus((status) => !status);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const employee = {
      id: selectedEmployee.id,
      name,
      email,
      isActive: status
    };
    dispatch(updateEmployee(employee));
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} id="employeeForm">
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
            <Switch checked={status} onChange={handleStatus} />
          </div>
        </div>
      </div>
    </form>
  );
}
