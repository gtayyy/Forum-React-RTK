import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        postList: [],
        selectedPost: {}
    },
    reducers: {
        addPost: (state, action) => {
            const { form } = action.payload;
            state.postList.push(form)
        },
        selectPost: (state, action) => {
            const { id } = action.payload;
            state.selectedPost = state.postList.find((post) => post.id === id) || {};
        },
        deletePost: (state, action) => {
            const { id } = action.payload;
            return state.filter((post) => post.id !== id)
        }
    }
})

export default postsSlice.reducer;

export const { addPost, selectPost, deletePost } = postsSlice.actions;

export const postsSelector = (state) => state.posts;