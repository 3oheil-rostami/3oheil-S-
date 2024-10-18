import { httpService } from "../http-service";

type SignUpData = {
  name: string;
  family: string;
  email?: string;
  password: string;
  number: string;
};

/* _-_-_-_-_-_-_-_- sign up -_-_-_-_-_-_-_-_ */

// step 1
const sendNumber = (number: string) =>
  httpService.post("/sms/send", { number });

// step 2
const sendCode = (data: { code: string; number: string }) =>
  httpService.post("/sms/verify", data);

// step 3 _last Step_
const signUp = (data: SignUpData) => {
  return httpService.post(
    "/auth/signup",
    { ...data },
    { withCredentials: true }
  );
};

export { sendNumber, sendCode, signUp };
