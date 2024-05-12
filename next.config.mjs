/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "i.pinimg.com",
        hostname: "muffingroup.com",
      },
    ],
  },
};

export default nextConfig;
