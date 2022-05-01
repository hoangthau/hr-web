import React, { memo } from 'react';

import { TableRow, TableCell } from 'components/Table/Table';
import { Button } from 'components';
import { Employee } from '../data/employeeSlice';

interface EmployeeRowProps {
  employee: Employee;
  onUpdate: (employee: Employee) => void;
}

function EmployeeRow({ employee, onUpdate }: EmployeeRowProps) {
  return (
    <TableRow key={employee.id}>
      <TableCell>{employee.id}</TableCell>
      <TableCell>{employee.name}</TableCell>
      <TableCell>{employee.email}</TableCell>
      <TableCell>{employee.isActive ? 'ACTIVE' : 'DEACTIVATED'}</TableCell>
      <TableCell>
        {employee.isActive && (
          <Button variant="primary" onClick={() => onUpdate(employee)}>
            Update
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
}

export default memo(EmployeeRow);
