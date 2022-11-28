import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	data: null,
};
const postSlice = createSlice({
	initialState,
	name: 'post',
	reducers: {
		// setPosts: (state, action) => {},
		// addPost: (state, action) => {},
		// updatePost: (state, action) => {},
		// removePosts: (state, action) => {},
		setPost: (state, action) => {
			state.data = action.payload;
		},
		// updatePost: (state, action) => {
		// 	state.data = action.payload;
		// },
	},
});

export const { setPost } = postSlice.actions;

const postReducer = postSlice.reducer;
export default postReducer;
