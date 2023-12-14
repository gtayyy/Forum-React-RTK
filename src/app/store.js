import { configureStore } from '@reduxjs/toolkit';
import postsSliceReducer from './postListSlice'

export const store = configureStore({
  reducer: {
    posts: postsSliceReducer,
  },
});
