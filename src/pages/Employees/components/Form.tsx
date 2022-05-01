import React, { useEffect, useState } from 'react';
import { useAppDispatch } from 'app/hooks';
import { TextInput, Switch } from 'components';
import { Employee, updateEmployee } from '../data/employeeSlice';
interface FormProps {
  selectedEmployee: Employee;
  onSubmit: () => void;
}

export function Form({ selectedEmployee, onSubmit }: FormProps) {
  const { name, email, isActive } = selectedEmployee;
  const [formState, setFormState] = useState({ name, email, isActive });
  const [error, setError] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const { name, email, isActive } = selectedEmployee;
    setFormState({
      name,
      email,
      isActive
    });
  }, [selectedEmployee]);

  useEffect(() => {
    const { name, email } = formState;
    if (!name || !email) {
      setError(true);
    } else {
      setError(false);
    }
  }, [formState]);

  const handleFormState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === 'isActive') {
      setFormState({ ...formState, isActive: e.target.checked });
    } else {
      setFormState({ ...formState, [name]: value });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, email, isActive } = formState;
    const employee = {
      id: selectedEmployee.id,
      name,
      email,
      isActive
    };
    if (name && email) {
      dispatch(updateEmployee(employee));
      onSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} id="employeeForm">
      <div className="mb-3 row">
        <label htmlFor="name" className="col-sm-2 col-form-label">
          Name*
        </label>
        <div className="col-sm-10">
          <TextInput
            type="text"
            className="form-control"
            name="name"
            value={formState?.name}
            onChange={handleFormState}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="email" className="col-sm-2 col-form-label">
          Email*
        </label>
        <div className="col-sm-10">
          <TextInput
            type="text"
            className="form-control"
            name="email"
            value={formState?.email}
            onChange={handleFormState}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Status</label>
        <div className="col-sm-10">
          <div className="form-check form-switch">
            <Switch name="isActive" checked={formState.isActive} onChange={handleFormState} />
          </div>
        </div>
      </div>
      {error && <p className="text-danger">Please input all required information</p>}
    </form>
  );
}
