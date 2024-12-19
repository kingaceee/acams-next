import { ReactNode, useEffect } from 'react';
import Button, { PropTypes as ButtonPropTypes } from '../buttons/Button';
import styles from './Modal.module.scss';
import { createPortal } from 'react-dom';

interface Btn {
  label: string;
  publType: ButtonPropTypes['publType'];
  onClick?: ButtonPropTypes['onClick']; // todo check
}

interface ModalProps {
  isOpen: boolean;
  modalTitle?: string;
  buttons?: Btn[];
  children: ReactNode;
  onClose: () => void;
}

export default function Modal({ modalTitle, isOpen, buttons, onClose, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return createPortal(
    <div className={`${styles.modal} ${isOpen ? styles.isOpen : ''}`} role='dialog' aria-modal='true' aria-labelledby='modal-title'>
      <div className={styles.modal__inner}>
        <div className={styles.modal__header}>
          {modalTitle && (
            <h3 id='modal-title' className={styles.modal__title}>
              {modalTitle}
            </h3>
          )}
          <button className={styles.modal__close} aria-label='Close modal' onClick={onClose}></button>
        </div>

        <div className={styles.modal__body}>{children}</div>

        {buttons && buttons.length > 0 && (
          <div className={styles.modal__footer}>
            {buttons.map((props, index) => (
              <Button key={`${index}`} {...props} />
            ))}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
