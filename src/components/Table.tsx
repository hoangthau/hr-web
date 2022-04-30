import React from 'react';

interface RowItem {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

interface TableProps {
  rows: Array<RowItem>;
  columns: Array<string>;
  onUpdate: () => void;
}

export function Table({ rows, columns, onUpdate }: TableProps) {
  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          {columns.map((col: string) => (
            <th key={col} scope="col">
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row: RowItem) => {
          return (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.isActive ? 'ACTIVE' : 'DEACTIVATED'}</td>
              <td>
                <button className="btn btn-primary" onClick={onUpdate}>
                  Update
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
