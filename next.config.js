const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: process.env.NODE_ENV === "development",
  workboxOptions: {
    disableDevLogs: true,
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
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
    ], // Add the hostnames here
  },
};

module.exports = withPWA(nextConfig);
