"use client"
import React, { useState } from 'react';
import { useEffect } from 'react';
import styles from './HowWeWorkPage.module.scss';
import FAQ from './FAQ/FAQ';
// import BackToTop from '../../ui/BackToTop';

const HowWeWorkPage = () => {
  const[isLoad, setIsLoad]= useState(true)
   useEffect(() => {
    setIsLoad(false)
  },[])
  return (
    <>
      <h2 className={styles.HowWeWorkTitle}>How we work</h2>
      {!isLoad && <FAQ />}
    </>
  );
};

export default HowWeWorkPage;
