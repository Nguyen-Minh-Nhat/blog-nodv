import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	data: {
		info: null,
		accessToken: null,
		isLoggedIn: false,
	},
	error: undefined,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.data.info = action.payload;
			state.data.isLoggedIn = true;
		},
		setAccessToken: (state, action) => {
			state.data.accessToken = action.payload;
		},
		logout: (state, action) => {
			state.data.isLoggedIn = false;
			state.data.info = null;
			state.data.accessToken = null;
		},
	},
});

export const { setUser, setAccessToken, logout } = userSlice.actions;

const userReducer = userSlice.reducer;
export default userReducer;
