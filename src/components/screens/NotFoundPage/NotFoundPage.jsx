import React from 'react';
import styles from './NotFoundPage.module.scss';
import notFound from 'public/notFound.png';
import Image from 'next/image';

const NotFoundPage = () => {
  return (
    <div className={styles.wrapper}>
      <Image src={notFound} alt="the page is not found" />
      <h1 className={styles.title}>NotFoundPage</h1>
    </div>
  );
};

export default NotFoundPage;
