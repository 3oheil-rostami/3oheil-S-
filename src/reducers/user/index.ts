import { getUserInfo } from "@/services/user";
import { UserReducerStatesProps } from "@/types";
import { UserInformation } from "@/types/apiTypes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUserInformation = createAsyncThunk("user/fetchUserInformation", async () => {
	try {
		const response = await getUserInfo();
		return response.data;
	} catch (error) {
		console.error(error);
	}
});

const initialState: UserReducerStatesProps = {
	data: null,
	error: null,
	status: "idle",
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchUserInformation.pending, state => {
			state.status = "pending";
		});
		builder.addCase(fetchUserInformation.fulfilled, (state, action) => {
			state.data = action.payload;
			state.status = "successfully";
			state.error = null;
		});
		builder.addCase(fetchUserInformation.rejected, (state, action) => {
			state.error = action.error.message;
			state.status = "failed";
			state.data = null;
		});
	},
});

export const isUserLoggedIn = (state: any) => !!state.user.data;

export const getUserInformation = (state: any) => state.user.data as UserInformation | null;

export default cartSlice.reducer;
