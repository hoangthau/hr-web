import React from 'react';

interface InputProps {
  className?: string;
  id?: string;
  role?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}

export function TextInput({
  type,
  value,
  onChange,
  className,
  id,
  role,
  checked,
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
      checked={checked}
      {...props}
    />
  );
}
