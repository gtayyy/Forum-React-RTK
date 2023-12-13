import { createSlice } from '@reduxjs/toolkit';
import { postListSelector } from './postListSlice'


export const selectedPostSlice = createSlice({
	name: 'selectedPost',
	initialState: {},
	reducers: {
		selectPost: (state, action) => {
            const postList = postListSelector;
			const { postId } = action.payload;
			return postList[postId]
		}
	}
})

export default selectedPostSlice.reducer;

export const { selectPost } = selectedPost.actions;

export const selectedPostSelector = (state) => state.selectedPost;