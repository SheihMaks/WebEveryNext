import React, { useState } from 'react';
import styles from './SliderMax.module.scss';
import BtnSliderMax from './BtnSliderMax';
import Image from 'next/image';

export const SliderInfo = ({
  array,
  currentIndex,
  setCurrentIndex,
  scrollToIndex,
}) => {
  const [touchPosition, setTouchPosition] = useState(null);

  const prevSlide = () => {
    if (currentIndex !== null && currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
      scrollToIndex(currentIndex);
    } else {
      setCurrentIndex(array.length - 1);
      scrollToIndex(array.length - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex !== null && currentIndex !== array.length - 1) {
      setCurrentIndex(currentIndex + 1);
      scrollToIndex(currentIndex);
    } else {
      setCurrentIndex(0);
      scrollToIndex(0);
    }
  };

  // ! Logic handleTouch

  const handleTouchStart = e => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = e => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      nextSlide();
    }

    if (diff < -5) {
      prevSlide();
    }

    setTouchPosition(null);
  };

  return (
    <>
      <div
        className={styles.sliderInfoWrapper}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {array.map((item, index) => {
          return (
            <div
              key={item.id}
              className={
                currentIndex === index ? styles.coworker : styles.hidden
              }
            >
              <div className={styles.photoWrapper}>
                <Image
                  className={styles.photo}
                  src={item.photo}
                  alt={item.name}
                  width={146}
                  height={171}
                  loading="lazy"
                />
              </div>

              <div className={styles.informationWrapper}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.profession}>{item.profession}</p>

                <p className={styles.quote}>
                  <svg className={styles.quoteIcon}>
                    <use href="/sprite.svg#icon-quotation-marks" />
                  </svg>
                  {item.quote}
                </p>
                <p className={styles.humor}>
                  <svg className={styles.humorIcon} width="20px" height="20px">
                    <use href="/sprite.svg#icon-smile-light" />
                  </svg>
                  {item.humor}
                </p>
                <p className={styles.city}>
                  {item.city},
                  <span className={styles.country}> {item.country}</span>
                </p>
                <div className={styles.mapWrapper}>
                  {/* <svg width="696px" height="393px" className={styles.map}>
                    <use href={`${sprite}#icon-map${item.location}`} />
                  </svg> */}
                  <Image
                    className={styles.map}
                    src={item.map}
                    alt={item.location}
                    width={696}
                    height={393}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export const SliderNav = ({
  array,
  currentIndex,
  setCurrentIndex,
  listRef,
  scrollToIndex,
}) => {
  const prevSlide = () => {
    if (currentIndex !== null && currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
      scrollToIndex(currentIndex);
    } else {
      setCurrentIndex(array.length - 1);
      scrollToIndex(array.length - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex !== null && currentIndex !== array.length - 1) {
      setCurrentIndex(currentIndex + 1);
      scrollToIndex(currentIndex);
    } else {
      setCurrentIndex(0);
      scrollToIndex(0);
    }
  };

  const goToSlide = index => setCurrentIndex(index);

  return (
    <>
      <div className={styles.sliderNavWrapper}>
        {/* {currentIndex !== 0 ? ( */}
        <BtnSliderMax moveSlide={prevSlide} direction={'prev'} />
        {/* ) : null} */}

        <div className={styles.photosWrapper} ref={listRef}>
          {array.map((item, index) => {
            return (
              <Image
                key={item.id}
                className={
                  currentIndex === index
                    ? styles.activePhotoSmall
                    : styles.photoSmall
                }
                src={item.photoSmall}
                alt={item.name}
                onClick={() => goToSlide(index)}
                width={37}
                height={37}
                loading="lazy"
              />
            );
          })}
        </div>
        {/* {currentIndex !== array.length - 1 ? ( */}
        <BtnSliderMax moveSlide={nextSlide} direction={'next'} />
        {/* ) : null} */}

        <div className={styles.dotsWrapper}>
          {array.map((_, index) => (
            <div
              key={index}
              className={
                currentIndex !== index
                  ? styles.dot
                  : `${styles.dot} ${styles.activeDot}`
              }
              onClick={() => {
                goToSlide(index);
                scrollToIndex(index);
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};
