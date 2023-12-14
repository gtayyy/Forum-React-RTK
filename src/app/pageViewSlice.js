import { createSlice } from "@reduxjs/toolkit";

export const pageViewSlice = createSlice({
	name: 'pageView',
	initialState: {page: 1},
	reducers: { 
		changePage: (state, action) => {
			const { view } = action.payload;
			state.page = view
		}
	}
})

export default pageViewSlice.reducer;

export const { changePage } = pageViewSlice.actions;

export const pageViewSelector = (state) => state.pageView;
