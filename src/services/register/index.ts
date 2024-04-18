import { httpService } from "../http-service";

type ApiData = {
	name: string;
	family: string;
	email?: string;
	password: string;
	number: string;
};

const sendNumber = (number: string) => httpService.post("/sms/send", { number });

const sendCode = (code: number, number: string) =>
	httpService.post("/sms/verify", { code, number });
const signUp = (data: ApiData) => {
	console.log({ ...data });
	return httpService.post(
		"/auth/signup",
		{ ...data },
		{
			withCredentials: true,
		}
	);
};

export { sendNumber, sendCode, signUp };
