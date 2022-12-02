import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: null,
  postIds: [],
};
const bookmarkSlice = createSlice({
  initialState,
  name: "bookmark",
  reducers: {
    setBookmark: (state, action) => {
      state.data = action.payload;
    },
    updatePostIds: (state, action) => {},
    // setPosts: (state, action) => {},
    // addPost: (state, action) => {},
    // updatePost: (state, action) => {},
    // removePosts: (state, action) => {},
    // setPost: (state, action) => {
    // 	state.data = action.payload;
    // },
    // updatePost: (state, action) => {
    // 	state.data = action.payload;
    // },
  },
});

export const { setBookmark, updatePostIds } = bookmarkSlice.actions;

const postReducer = bookmarkSlice.reducer;
export default postReducer;
