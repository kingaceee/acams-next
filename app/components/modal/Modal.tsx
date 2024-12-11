import { ReactNode } from 'react';
import Button from '../buttons/Button';
import styles from './Modal.module.scss';

interface Btn {
  label: string;
  publType: string;
}

interface ModalProps {
  isOpen: boolean;
  modalTitle?: string;
  buttons?: Btn[];
  children: ReactNode;
  // onClose: () => void;
}

export default function Modal({ modalTitle, isOpen, buttons, children }: ModalProps) {
  return (
    <div className={`${styles.modal} ${isOpen ? styles.isOpen : ''}`} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className={styles.modal__inner}>
        <div className={styles.modal__header}>
          {modalTitle && (<h3 id="modal-title" className={styles.modal__title}>{modalTitle}</h3>)}
					<button className={styles.modal__close} aria-label="Close modal"></button>
        </div>

        <div className={styles.modal__body}>{children}</div>

        {buttons && buttons.length > 0 && (
        <div className={styles.modal__footer}>
          {buttons.map((btn, index) => (
          <Button key={index} label={btn.label} publType={btn.publType} />
          ))}
        </div>
        )}
      </div>
    </div>
  );
}