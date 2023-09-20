import styles from './Form.module.scss';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

const OurContacts = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.contactsWrap}>
      <hr />
      <ul className={styles.contactsList}>
        <li className={styles.contactsItem}>{t('form.contactUs')}</li>
        <li className={styles.contactsItem}>
          <Link href="tel:+380503738465">
            <svg className={styles.iconItem}>
              <use href='/sprite.svg#icon-telephone' />
            </svg>
            +380 50 373 8465
          </Link>
        </li>
        <li className={styles.contactsItem}>
          <Link href="mailto:inbox.webevery@gmail.com">
            <svg className={styles.iconItem}>
              <use href='/sprite.svg#envelope' />
            </svg>
            inbox.webevery@gmail.com
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default OurContacts;

//  rfc  rafc
