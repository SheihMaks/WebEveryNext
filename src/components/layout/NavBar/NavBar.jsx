"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Logo from './Logo_webery_lightyellow.svg';
import SmallLogo from './small_logo_lightyellow.svg';
import { useTranslation } from 'react-i18next';
import LanguageBtnBlock from '@/components/share/LanguageBtnBlock/LanguageBtnBlock';
import { navData, currentLanguages } from '@/data';
import styles from './NavBar.module.scss';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { t } from 'i18next';

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const [isLoad,setIsLoad]=useState(true)
  const { i18n } = useTranslation();
  
  useEffect(() => {
    setIsLoad(false)
  }, [])
  
const path=usePathname()

  function topFunction() {
    if (typeof window !== "undefined") {
      document.body.scrollTop = 0; //For Safari
      document.documentElement.scrollTop = 0;
    }
  }
  return (<header className={styles.headerNav}>
      <Link href='/' className={styles.navLinkLogo} passHref={true} prefetch={false}>
        <Logo
          className={styles.laptopLogo}
          width="145"
          height="39"
          title="logo"
        />
        <SmallLogo
          className={styles.mobileLogo}
          width="56"
          height="40"
          title="logo"
        />
        {/* <img
            src={logo}
            alt="laptopLogo"
            className={styles.laptopLogo}
            width="145"
            height="39"
            title="logo"
            loading="lazy"
          />
          <img
            src={smallLogo}
            alt="mobileLogo"
            className={styles.mobileLogo}
            width="56"
            height="40"
            title="logo"
            loading="lazy"
          /> */}
      </Link>

      <div className={styles.navContainer}>
        <LanguageBtnBlock desk={styles.desk} />
        <ul
          className={
            nav
              ? styles.menuNav
              : styles.menuBurger + ' ' + styles.activeBurger
          }
        >
          {!isLoad && navData.map(el => (
            <li key={el.id} onClick={topFunction}>
              <Link
                href={el.path}
                onClick={() => setNav(true)}
                prefetch={false}
                className={
                  path === el.path ? styles.activeNavLinkNav : styles.navLinkNav
                }
              >
                {i18n.language === currentLanguages.EN
                  ? el.titleEN
                  : el.title}
              </Link>
            </li>
          ))}
        </ul>

        <LanguageBtnBlock mobile={styles.mobile} />

        <button
          onClick={() => setNav(!nav)}
          className={styles.mobileBtnNav}
          aria-label="BurgerMenu"
        >
          {nav ? (
            <svg width="100%" height="100%">
              <use href="/sprite.svg#icon-burger-menu" />
            </svg>
          ) : (
            <svg width="100%" height="100%">
              <use href="/sprite.svg#icon-close-white" />
            </svg>
          )}
        </button>
      </div>
    </header>
    );
};

export default Navbar;
