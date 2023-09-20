"use client"

import React from 'react';

import { projectsData } from '@/data';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';

// import required modules
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

import styles from './OurWorks.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const OurWorks = () => {
  return (
    <section className={styles.section}>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        // loop={true}
        freeMode={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        speed={1000}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {projectsData.map(({ id, img, path, name }) => {
          return (
            <SwiperSlide key={id}>
              <Link
                href={path}
                target="_blank"
                rel="noreferrer"
                className="slide-content"
              >
                <Image src={img} alt={name} width={800} height={600} />
                <div className="slide-discription">
                  <h3>{name}</h3>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default OurWorks;
