import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	data: null,
	error: undefined,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: () => {},
	},
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
