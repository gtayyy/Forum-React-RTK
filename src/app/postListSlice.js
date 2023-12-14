import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        postList: [],
        selectedPost: {},
        sortedList: []
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
        sortList: (state, action) => {
            state.sortedList = state.postList.sort((a, b) => b.vote - a.vote)
        },
        upVote: (state, action) => {
            const { id } = action.payload;
            const upvoted = state.postList.find((post) => post.id === id) || {};
            upvoted.vote +=1
            state.postList = state.postList.map((post) => {
                if (post.id === id) {
                    return {...post, upvoted };
                }
                return post;
            }) 
        },
        downVote: (state, action) => {
            const { id } = action.payload;
            const downvoted = state.postList.find((post) => post.id === id) || {};
            downvoted.vote -=1
            state.postList = state.postList.map((post) => {
                if (post.id === id) {
                    return {...post, downvoted };
                }
                return post;
            }) 
        },
        deletePost: (state, action) => {
            const { id } = action.payload;
            return state.postList.filter((post) => post.id !== id)
        }
    }
})

export default postsSlice.reducer;

export const { addPost, selectPost, sortList, upVote, downVote, deletePost } = postsSlice.actions;

export const postsSelector = (state) => state.posts;