"use client"
// import Button from 'components/share/Button/Button';
import React, { useEffect, useState } from 'react';
import styles from './BackToTop.module.scss';
import Icon from 'public/V.svg';

if (typeof window !== "undefined") {
  window.onscroll = function () {
  scrollFunction();
};
}


function scrollFunction() {
  if (typeof window !== "undefined") {
    let backToTop = document.getElementById('backToTop');
    if (!backToTop) return;
    if (
      document && document.body.scrollTop >= 200 ||
      document.documentElement.scrollTop >= 200
    ) {
      // backToTop.style.display = 'block';
      backToTop.className = styles.backToTop__visible;
    } else {
      // backToTop.style.display = 'none';
      backToTop.className = styles.backToTop;
    }
  }
}
  function topFunction() {
    if (typeof window !== "undefined") {
      document.body.scrollTop = 0; //For Safari
      document.documentElement.scrollTop = 0;
    }
  }

const BackToTop = () => {
  const [isLoad, setIsLoad] = useState(true)
  useEffect(() => {
    setIsLoad(false)
  },[])
  return (
    <>
      { !isLoad && (<button
        id="backToTop"
        type="button"
        onClick={topFunction}
        // className={styles.backToTop}
        className={`${styles.backToTop} ${scrollFunction()}`}
        aria-label="backToTop"
      >
        <Icon className={styles.backToTopIcon} />
      </button>)}
    </>
  );
};

export default BackToTop;
