import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

test('should show button with text', () => {
  const buttonText = 'Button';
  const handleClick = jest.fn();

  render(<Button onClick={handleClick}>{buttonText}</Button>);

  fireEvent.click(screen.getByText(buttonText));
  expect(handleClick).toHaveBeenCalled();

  expect(screen.getByText(buttonText).textContent).toBe(buttonText);
  expect(screen.getByText(buttonText)).toBeInTheDocument();
});
