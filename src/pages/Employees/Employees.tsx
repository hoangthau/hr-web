import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getData, selectEmployees } from './data/employeeSlice';
import data from './data/data.json';
import './Employees.css';
import { Table } from '../../components/Table';
import { Modal } from '../../components/Modal';

function Employees() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useAppDispatch();
  const employees = useAppSelector(selectEmployees);

  useEffect(() => {
    dispatch(getData(data.employees));
  }, [dispatch]);

  const toggleModal = () => {
    setIsOpenModal((isOpen) => !isOpen);
  };

  return (
    <div className="employees-page">
      <h2>Manage Employees</h2>
      <Table
        rows={employees}
        columns={['ID', 'Name', 'Email', 'Status', 'Action']}
        onUpdate={toggleModal}
      />
      <Modal title="Update Employee" isOpen={isOpenModal} onClose={toggleModal}>
        <form>
          <div className="mb-3 row">
            <label htmlFor="name" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="name" />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="email" />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Status</label>
            <div className="col-sm-10">
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" />
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Employees;
