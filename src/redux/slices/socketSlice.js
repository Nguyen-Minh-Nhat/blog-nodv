import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: null,
};

const socketSlice = createSlice({
	name: 'socket',
	initialState,
	reducers: {
		setSocket: (state, actions) => {
			state.data = actions.payload;
		},
	},
});

export const { setSocket } = socketSlice.actions;

export default socketSlice.reducer;
