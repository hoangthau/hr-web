import React from 'react';

interface ButtonProps {
  variant?: string;
  children?: React.ReactNode;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
}

export function Button({
  variant = 'primary',
  children,
  onClick,
  type = 'button',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${className ? className : `btn btn-${variant}`}`}
      onClick={onClick}
      {...props}>
      {children}
    </button>
  );
}
