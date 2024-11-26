/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: "export", //konieczne do exportu deploy
  images: {
    // loader: "custom",
    // loaderFile: "./loader.js",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
