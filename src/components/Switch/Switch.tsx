import React from 'react';

interface SwitchProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  name?: string;
}

export function Switch({ checked, onChange, name, ...props }: SwitchProps) {
  return (
    <input
      className="form-check-input"
      type="checkbox"
      role="switch"
      checked={checked}
      onChange={onChange}
      name={name}
      {...props}
    />
  );
}
