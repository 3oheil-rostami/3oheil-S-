import axios from "axios";

const baseURL = "http://localhost:4000";
const isServer: boolean = typeof window === "undefined";

const httpService = axios.create({
	baseURL,
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true,
});

const responseInterceptor = axios.create({
	baseURL,
});

responseInterceptor.interceptors.request.use(async config => {
	if (isServer) {
		const { cookies } = await import("next/headers");
		const token = cookies().get("token")?.value;

		if (token) {
			config.headers["Authorization"] = `Bearer ${token}`;
		}
	} else {
		const token = [...document.cookie.split("; ")]
			.map(cookieItem => cookieItem.split("="))
			.filter(cookieItem => cookieItem[0] === "token")[0][1];
		if (token) {
			config.headers["Authorization"] = `Bearer ${token}`;
		}
	}

	return config;
});

responseInterceptor.interceptors.response.use(
	response => response,
	async error => {
		if (error.response?.status === 405) {
			window.location.href = "/login";
		}
		return Promise.reject(error);
	}
);

export { httpService, responseInterceptor };
