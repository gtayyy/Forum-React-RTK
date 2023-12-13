import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const voteSlice = createSlice({
	name: "voteCount",
	initialState: initialState,
	reducers: {
		addVote: (state, action) => {
			// where we define the logic to update our state

			state.push(action.payload);
		}
	}
});

export default voteSlice.reducer;
