module.exports = {
  transpilePackages: ["react-icons"],
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/image/*",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api-demon.liara.run",
        pathname: "/**",
      },
    ],
    domains: ["localhost", "api-demon.liara.run"],
  },
};
