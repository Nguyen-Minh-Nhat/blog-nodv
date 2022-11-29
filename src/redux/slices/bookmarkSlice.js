import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  bookmarks: null,
};
const bookmarkSlice = createSlice({
  initialState,
  name: "bookmark",
  reducers: {
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

export const {} = bookmarkSlice.actions;

const postReducer = bookmarkSlice.reducer;
export default postReducer;
