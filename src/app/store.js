import { configureStore } from '@reduxjs/toolkit';
import postSliceReducer from './postListSlice'
import selectedPostReducer from './selectedPostSlice'

export const store = configureStore({
  reducer: {
    postList: postSliceReducer,
    selectedPost: selectedPostReducer
  },
});
