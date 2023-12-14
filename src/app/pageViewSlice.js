import { createSlice } from "@reduxjs/toolkit";
import Feed from "../components/Feed";
import Form from "../components/Form";
import PostDetail from "../components/PostDetail";

export const pageViewSlice = createSlice({
	name: 'pageView',
	initialState: Feed,
	reducers: { 
		pageView: (state, action) => {
			
		}
	}
})