import { createSlice } from '@reduxjs/toolkit';
import fetchAllPosts from '../reducer/posts';

const initialState = {
    posts: [],
    isLoading: false,
    errorPosts: '',
    PostsListsStatus: 'pending',
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(fetchAllPosts.pending, (state) =>{
            state.isLoading = true;
            state.errorPosts = '';
            state.posts = [];
        });
        builder.addCase(fetchAllPosts.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.errorPosts = '';
            state.posts = action.payload;
        });
        builder.addCase(fetchAllPosts.rejected, (state, action) =>{
            state.isLoading = false;
            state.errorPosts = action.payload;
            state.posts = [];
        })
    }
});

const postsReducer = postsSlice.reducer;

export const { setPosts, setLoading, setError } = postsSlice.actions;
export default postsReducer;