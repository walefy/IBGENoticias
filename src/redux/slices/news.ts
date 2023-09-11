import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../types';

const initialState: RootState = {
  news: [],
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
});
