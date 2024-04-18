"use client";
import { createContext, useContext } from "react";

type LoginParameters = { name?: string; family?: string; phoneNumber?: string; token?: string };
interface ContextProps {
	login: ({ name, family, phoneNumber, token }: LoginParameters) => void;
	logout: () => void;
	isLoggedIn: boolean;
	userInfos: LoginParameters;
}

let isLoggedIn: boolean = false;
let userInfos: LoginParameters = {};

const login = ({ ...props }: LoginParameters) => {
	userInfos = JSON.parse(JSON.stringify({ ...props }));
	isLoggedIn = true;
};
const logout = () => {
	localStorage.removeItem("token");
	isLoggedIn = false;
};

const AppContext = createContext<ContextProps>({ login, logout, isLoggedIn, userInfos });

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<AppContext.Provider value={{ login, logout, isLoggedIn, userInfos }}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => useContext(AppContext);
export default ContextProvider;
