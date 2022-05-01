import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from './Modal';

test('should show button with text', () => {
  const handleClose = jest.fn();
  render(
    <Modal title="Modal" isOpen={true} onClose={handleClose}>
      <div>Modal Content</div>
    </Modal>
  );

  fireEvent.click(screen.getByText(/Close/i));
  expect(handleClose).toHaveBeenCalled();

  expect(screen.getByText('Close')).toBeInTheDocument();
  expect(screen.getByText('Modal')).toBeInTheDocument();
  expect(screen.getByText('Modal Content')).toBeInTheDocument();
});
