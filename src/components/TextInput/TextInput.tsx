import React from 'react';

interface InputProps {
  className?: string;
  id?: string;
  role?: string;
  type?: string;
  value?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TextInput({
  type,
  value,
  onChange,
  className,
  id,
  role,
  name,
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={className}
      id={id}
      role={role}
      name={name}
      {...props}
    />
  );
}
