import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    isLoading: false,
    errorPosts: '',
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) =>{
            state.isLoading = false;
            state.errorPosts = '';
            state.posts = action.payload;
        },

        setLoading: (state, action) =>{
            state.isLoading = true;
            state.errorPosts = '';
            state.posts = [];
        },

        setError: (state, action) =>{
            state.isLoading = false;
            state.errorPosts = action.payload;
            state.posts = [];
        },

    }
});

const postsReducer = postsSlice.reducer;

export const { setPosts, setLoading, setError } = postsSlice.actions;
export default postsReducer;