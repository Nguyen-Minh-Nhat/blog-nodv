import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	data: {
		info: null,
		accessToken: null,
	},
	error: undefined,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.data.info = action.payload;
		},
		setAccessToken: (state, action) => {
			state.data.accessToken = action.payload;
		},
	},
});

export const { setUser, setAccessToken } = userSlice.actions;

export default userSlice.reducer;
