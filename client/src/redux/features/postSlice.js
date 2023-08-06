// postSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  posts: [],
  loading: 'idle',
  error: null,
};

export const fetchRecentPosts = createAsyncThunk('posts/fetchRecent', async () => {
  const response = await axios.get('http://localhost:5000/posts/recent');
  return response.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecentPosts.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(fetchRecentPosts.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.posts = action.payload;
      })
      .addCase(fetchRecentPosts.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.error.message ?? 'Failed to fetch posts.';
      });
  },
});

export default postsSlice.reducer;
