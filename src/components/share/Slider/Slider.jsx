import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import BtnSlider from './BtnSlider';

import styles from './Slider.module.scss';

const Slider = ({ array }) => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [touchPosition, setTouchPosition] = useState(null);

  const nextSlide = () => {
    if (slideIndex !== array.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === array.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(array.length);
    }
  };

  const moveDots = index => setSlideIndex(index);

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
        className={styles.containerSlider}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div className={styles.wrapperSliderAndDots}>
          <BtnSlider moveSlide={prevSlide} direction={'prev'} />
          {array.map((item, index) => {
            return (
              <div
                key={item.id}
                className={
                  slideIndex === index + 1
                    ? styles.activeAnim
                    : styles.hiddenSlide
                }
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  className={styles.mockupImg}
                  width="100%"
                  height="100%"
                  loading="lazy"
                />

                <Link
                  href={item.path}
                  title={item.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.siteNameProject}
                >
                  {item.name}
                </Link>
                <p className={styles.descriptionProject}>{item.text}</p>
              </div>
            );
          })}

          <BtnSlider moveSlide={nextSlide} direction={'next'} />
        </div>

        <div className={styles.containerDots}>
          {array.map((_, index) => (
            <div
              key={index}
              className={
                slideIndex === index + 1
                  ? `${styles.dot} ${styles.dotActive}`
                  : styles.dot
              }
              onClick={() => moveDots(index + 1)}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
