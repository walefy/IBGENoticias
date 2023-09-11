import { configureStore } from '@reduxjs/toolkit';
import { newsSlice } from './slices/news';

export const store = configureStore({
  reducer: newsSlice.reducer,
});
