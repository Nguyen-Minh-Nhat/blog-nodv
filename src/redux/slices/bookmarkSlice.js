import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  postIds: [],
  posts: [],
};
const bookmarkSlice = createSlice({
  initialState,
  name: "bookmark",
  reducers: {
    setBookmark: (state, action) => {
      state.postIds = action.payload?.postIds;
      state.posts = action.payload?.posts;
    },
    updatePostIds: (state, action) => {
      state.postIds = action.payload;
    },
    updatePosts: (state, action) => {
      state.posts = action.payload;
    },
    updateBookmark: (state, action) => {
      state.postIds = action.payload?.postIds;
      state.posts = action.payload.posts?.filter((post) =>
        state.postIds.includes(post.id)
      );
    },
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

export const { setBookmark, updatePostIds, updatePosts, updateBookmark } =
  bookmarkSlice.actions;

const postReducer = bookmarkSlice.reducer;
export default postReducer;
