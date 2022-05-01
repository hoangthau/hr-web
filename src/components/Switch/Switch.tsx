import React from 'react';

interface SwitchProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}

export function Switch({ checked, onChange, ...props }: SwitchProps) {
  return (
    <input
      className="form-check-input"
      type="checkbox"
      role="switch"
      checked={checked}
      onChange={onChange}
      {...props}
    />
  );
}
