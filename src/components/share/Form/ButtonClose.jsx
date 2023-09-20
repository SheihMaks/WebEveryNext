import styles from './Form.module.scss';

const ButtonClose = ({ closeModal, className }) => {
  return (
    <button
      type="button"
      className={`${styles.closeBtn} ${className}`}
      onClick={closeModal}
    >
      <svg className={styles.iconClose}>
        <use href='/sprite.svg#close' />
      </svg>
    </button>
  );
};

export default ButtonClose;
