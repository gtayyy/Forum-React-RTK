import { configureStore } from '@reduxjs/toolkit';
import postSliceReducer from './postListSlice'

export const store = configureStore({
  reducer: {
    postList: postSliceReducer,
  },
});
