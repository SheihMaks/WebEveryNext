import React from 'react';
import HowWeWorkPage from '@/components/screens/HowWeWorkPage/HowWeWorkPage';

const HowWeWork = () => {
    return (
    <>
        <title>Як ми робимо веб-сайти</title>
        <meta
            name="description"
            content="Розробка та створення веб-сайтів з індивідуальним дизайном. Сайт-візитка, інтернет-магазин, лендінг, корпоративний сайт. SEO оптимізація."
        />
        <meta
            name="keywords"
            content="веб-сайт, сайт, веб-розробка, створення веб-сайтів, дизайн веб-сайтів, розробка інтернет-магазину, програмування, веб-додаток, SEO оптимізація, мобільна розробка,  дизайн, тестування, проектування"
        />
        <link rel="canonical" href="howWeWork" />
        <h1 className="seoTitle">Як ми працюємо з нашими замовниками</h1>
        <HowWeWorkPage />;
    </>
    );
};

export default HowWeWork;