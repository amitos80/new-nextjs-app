import React from 'react';
import * as Modals from '~/molecules/modals';

export default ({ modal, closeModal }) => {
  const Modal = modal.open && Modals[modal.name];
  return modal.open && <Modal {...modal.settings} onClose={closeModal} />;
};
