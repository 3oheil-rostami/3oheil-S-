/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["react-icons"],
  env: {
    BASE_URL_BACKEND: "http://localhost:4000",
    NEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE:
      "web.bd061e9204e040ebb8aba23a543bc67b",
  },
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
  async headers() {
    return [
      {
        // matching all API routes
        source: "/:path",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};
export default nextConfig;
