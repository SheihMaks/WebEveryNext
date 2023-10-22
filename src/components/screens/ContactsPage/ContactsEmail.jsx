import Link from 'next/link';
import styles from './ContactsPage.module.scss';

export const ContactsEmail = () => {
  return (
    <a href="mailto:inbox.webevery@gmail.com"  className={styles.email}>
      <svg>
        <use href='/sprite.svg#icon-contactsMail' />
      </svg>
      <p> inbox.webevery@gmail.com</p>
    </a>
  );
};
