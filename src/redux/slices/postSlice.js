import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	loading: false,
	data: null,
	error: null,
};

const postSlice = createSlice({
	initialState,
	name: 'post',
	reducers: {
		setPosts: (state, action) => {},
		addPost: (state, action) => {},
		updatePost: (state, action) => {},
		removePosts: (state, action) => {},
	},
});

export const { setPosts, addPost, removePosts, updatePost } = postSlice.actions;

export default postSlice.reducer;
