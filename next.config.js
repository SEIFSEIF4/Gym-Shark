const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  },
  fallbacks: {
    //image: "/static/images/fallback.png",
    // document: "/offline", // if you want to fallback to a custom page rather than /_offline
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "i.pinimg.com",
      "muffingroup.com",
      "static.vecteezy.com",
      "lh3.googleusercontent.com",
      "www.gymequip.eu",
      "static.ticimax.cloud",
      "www.prowheyshop.com",
      "cdn.dsmcdn.com",
      "productimages.hepsiburada.net",
      "www.eatingwell.com",
      "cdni.iconscout.com",
    ],
  },
};

module.exports = withPWA(nextConfig);
