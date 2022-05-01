import React from 'react';
interface TableChildrenProps {
  children: React.ReactNode;
}

interface TableHeadProps {
  columns: Array<string>;
}

export function TableHead({ columns }: TableHeadProps) {
  return (
    <thead>
      <tr>
        {columns.map((col: string) => (
          <th key={col} scope="col">
            {col}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export function TableCell({ children }: TableChildrenProps) {
  return <td>{children}</td>;
}

export function TableBody({ children }: TableChildrenProps) {
  return <tbody>{children}</tbody>;
}

export function TableRow({ children }: TableChildrenProps) {
  return <tr>{children}</tr>;
}

export function Table({ children }: TableChildrenProps) {
  return <table className="table table-bordered table-striped">{children}</table>;
}
