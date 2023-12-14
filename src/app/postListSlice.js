import { createSlice } from '@reduxjs/toolkit';

export const postListSlice = createSlice({
    name: 'postList',
    initialState: {"1": {postTitle: "title", subTitle: "subtitle", content: "content", id: "1"}},
    reducers: {
        addPost: (state, action) => {
            const { id, form } = action.payload;
            state[id] = form
        },
        deletePost: (state, action) => {
            const { id } = action.payload;
            delete state[id];
        }
    }
})

export default postListSlice.reducer;

export const { addPost, deletePost } = postListSlice.actions;

export const postListSelector = (state) => state.postList;