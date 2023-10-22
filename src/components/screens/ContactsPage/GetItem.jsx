import { contactsData, contactsDataEN, currentLanguages } from '@/data';
import styles from './ContactsPage.module.scss';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export const GetItem = () => {
  const { i18n } = useTranslation();

  const currentLanguageContactsData = () => {
    return i18n.language === currentLanguages.EN
      ? contactsDataEN
      : contactsData;
  };
  return (
    <ul className={styles.contactsList}>
      {currentLanguageContactsData().map(({ id, country, tel, location }) => {
        return (
          <li key={id}>
            <h2>{country}</h2>

            <a href={'tel:' + tel} >
              <svg>
                <use href='/sprite.svg#icon-contactsTel' />
              </svg>
              <p> {tel}</p>
            </a>

            <p>
              <svg>
                <use href='/sprite.svg#icon-contactsLocation' />
              </svg>
              {location}
            </p>
          </li>
        );
      })}
    </ul>
  );
};
