"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from 'public/V.svg';
import styles from './FAQItem.module.scss';
// import './FAQItem.module.scss';

const FAQItem = ({
  question,
  answer,
  activeIndex,
  setActiveIndex,
  id,
  href,
  link,
  answerHeight,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const divRef = useRef();

  const isAnswerShown = () =>
    id === activeIndex ? setIsClicked(!isClicked) : null;

  useEffect(() => {
    isAnswerShown();

    // eslint-disable-next-line
  }, [activeIndex]);

  const answerStyles = isClicked
    ? `${styles.FAQanswer__visible} ${answerHeight}`
    : styles.FAQanswer;

  const iconStyles = isClicked ? styles.FAQIcon__rotate : styles.FAQIcon;

  const ariaExpanded = isClicked ? true : false;

  return (
    <>
      <li className={styles.FAQItem}>
        <div
          onClick={() => {
            // eslint-disable-next-line
            return setActiveIndex(id), isAnswerShown();
          }}
          aria-expanded={ariaExpanded}
          aria-controls={id}
          id={id}
          className={styles.FAQQuestionContainer}
          ref={divRef}
        >
          <p className={styles.FAQQuestion}>{question}</p>
          <Icon className={iconStyles} />
        </div>

        <p id={id} className={answerStyles}>
          {answer}
          {href && (
            <Link className={styles.FAQLink} href={href}>
              {link}
            </Link>
          )}
        </p>
      </li>
    </>
  );
};

export default FAQItem;
