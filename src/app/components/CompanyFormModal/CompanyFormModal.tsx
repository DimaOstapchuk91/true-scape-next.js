'use client';

import CompanyForm from '../CompanyForm/CompanyForm';
import Modal, { ModalProps } from '../Modal/Modal';

export default function CompanyFormModal({ onClose, ...rest }: ModalProps) {
  return (
    <Modal {...rest} onClose={onClose}>
      <CompanyForm onSubmit={() => onClose()} />
    </Modal>
  );
}
