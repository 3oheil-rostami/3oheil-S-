import { responseInterceptor } from "../http-service";

const getUserInfo = () => responseInterceptor.get("/user/myInfo");

export { getUserInfo };
