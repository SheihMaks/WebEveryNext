/** @type {import('next').NextConfig} */
const nextConfig = {
    
}


module.exports = {
  i18n: {
    defaultLocale: 'ua',
    locales: ['default', 'ua', 'en'],
    localeDetection: false,
    //  ignoreRoutes: "/",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    })

    return config;
  }
};
