import React from 'react';
import OurServices from '@/components/screens/ServicesPage';

const Services = () => {
    return (
    <>
        <title>Розробка сайтів з індивідуальним дизайном. </title>
        <meta
            name="description"
            content="Розробка сайтів з індивідуальним дизайном. Сайт-візитка, інтернет-магазин, лендінг, корпоративний сайт. "
        />
        <meta
            name="keywords"
            content="веб-сайт, сайт, веб-розробка, створення веб-сайтів, дизайн веб-сайтів, розробка інтернет-магазину, програмування, веб-додаток, SEO оптимізація, мобільна розробка,  дизайн, тестування, проектування"
        />
        <link rel="canonical" href="services" />
        <h1 className="seoTitle">Розробка сайтів з індивідуальним дизайном </h1>
        <OurServices />
      {/* <BackToTop /> */}
    </>
    );
};
export default Services;