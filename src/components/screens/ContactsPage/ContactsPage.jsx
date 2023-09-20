"use client"
import { useModal } from '@/hooks';
import Button from '../../share/Button/Button';
import { GetItem } from './GetItem';
import { ContactsEmail } from './ContactsEmail';
import Modal from '@/components/share/Modal';
import Form from '@/components/share/Form';
import styles from './ContactsPage.module.scss';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const ContactsPage = () => {
  const[isLoad,setIsLoad]=useState(true)
  
  const { modalActive, shouldRender, openModal, closeModal } = useModal();
  
  const { t } = useTranslation();
  
  useEffect(() => {
    setIsLoad(false)
  },[])
  
  return (
    <section className={styles.contactsSection}>
      {!isLoad && (<><div className={styles.contactsWrapper}>
        <GetItem />
        <ContactsEmail />
        <Button
          // title="Замовити дзвінок"
          title={t('contactsPage.contactsPage')}
          className={styles.contactsBtn}
          onClick={openModal}
        />
        <Form className={styles.contactsForm} />
      </div></>)}
      {shouldRender && (
        <Modal closeModal={closeModal} active={modalActive}>
          <Form isOpen={modalActive} closeModal={closeModal} />
        </Modal>
      )}
      
    </section>
  );
};

export default ContactsPage;
