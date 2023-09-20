import React from 'react';
import SocialLinksList from '@/components/share/SocialLinksList';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      <footer className={styles.wrapperFooter}>
        <p className={styles.copyright}>Copyright &copy; 2023 Webevery</p>

        <SocialLinksList
          customPosition={styles.linkPosition}
          customBlockSize={styles.linkSize}
          customIconSize={styles.iconSize}
        />
        <div className={styles.mailBlock}>
          <a
            className={styles.mailLink}
            href="mailto:inbox.webevery@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mail"
          >
            <svg className={styles.mailIcon}>
              <use href="/sprite.svg#envelope" />
            </svg>
          </a>
          <a className={styles.mailText} href="mailto:inbox.webevery@gmail.com">
            inbox.webevery@gmail.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
