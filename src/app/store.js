import { configureStore } from '@reduxjs/toolkit';
import postsSliceReducer from './postListSlice'
import pageViewReducer from './pageViewSlice' 

export const store = configureStore({
  reducer: {
    posts: postsSliceReducer,
    pageView: pageViewReducer
  },
});
