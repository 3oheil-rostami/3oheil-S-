"use client";
import { getUserInfo } from "@/services/user";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type UserDataContentProps = { name: string; family: string; number?: string; email: string };
interface ContextProps {
	user: UserDataContentProps | undefined;
	logout: () => void;
	isLoggedIn: boolean;
	updateUserInfo: () => void;
}
interface MainContextState {
	user: UserDataContentProps | undefined;
}

const AppContext = createContext<ContextProps>({} as ContextProps);

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, setState] = useState<MainContextState>({
		user: undefined,
	});
	const isLoggedIn: boolean = useMemo(() => {
		return !!state.user;
	}, [state.user]);

	const updateUserInfo = (): void => {
		getUserInfo()
			.then(res => {
				const user = { ...res.data } as UserDataContentProps;
				setState(prevValue => ({ ...prevValue, user }));
			})
			.catch(e => console.error(e));
	};
	const logout = () => {
		localStorage.removeItem("token");
		document.cookie = `token=; MaxAge=0;`;
	};
	useEffect(() => {
		updateUserInfo();
	}, []);
	return (
		<AppContext.Provider value={{ ...state, isLoggedIn, updateUserInfo, logout }}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => useContext(AppContext);
export default ContextProvider;
