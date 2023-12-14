// import { createSlice } from '@reduxjs/toolkit';
// import { postListSelector } from './postListSlice';



// export const selectedPostSlice = createSlice({
// 	name: 'selectedPost',
// 	initialState: {},
// 	reducers: {
// 		selectPost: (state, action) => {
			
// 			const { postId } = action.payload;
// 			const newList = [...postList]
// 			return newList.find((post) => post.id === postId) || {};
// 		}
		
// 	}
// })

// export default selectedPostSlice.reducer;

// export const { selectPost } = selectedPostSlice.actions;

// export const selectedPostSelector = (state) => state.selectedPost;