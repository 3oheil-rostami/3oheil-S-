import { responseInterceptor } from "../http-service";

const getUserInfo = () => responseInterceptor.get("/user/myInfo");

const updateUserInformation = ({ ...props }: { name: string; family: string; email: string }) =>
	responseInterceptor.put("/user/update", { ...props });

export { getUserInfo, updateUserInformation };
