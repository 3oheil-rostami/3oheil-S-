module.exports = {
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
				hostname: "demon.liara.run",
				pathname: "/**",
			},
		],
		domains: ["localhost"],
	},
};
