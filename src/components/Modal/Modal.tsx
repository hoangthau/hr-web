import React from 'react';
import './Modal.css';
import { Button } from '../Button';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ title, isOpen, onClose, children }: ModalProps) {
  return (
    <>
      {isOpen && (
        <div>
          <div className="modal fade show" tabIndex={-1}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{title}</h5>
                  <Button className="btn-close" onClick={onClose}></Button>
                </div>
                <div className="modal-body">{children}</div>
                <div className="modal-footer">
                  <Button type="button" variant="secondary" onClick={onClose}>
                    Close
                  </Button>
                  <Button type="submit" form="employeeForm" variant="primary">
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </div>
      )}
    </>
  );
}
