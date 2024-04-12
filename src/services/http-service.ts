import axios from "axios";

const baseURL = "http://localhost:4000";

export const httpService = axios.create({
	baseURL,
	headers: {
		"Content-Type": "application/json",
	},
});

// const responseInterceptor = axios.create({
// 	baseURL,
// }).interceptors.response.use({})