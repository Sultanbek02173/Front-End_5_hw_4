import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    isLoading: true,
    errorPost: '',
}

const postsDetailSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        setPosts: (state, action) =>{
            state.posts = action.payload;
            state.isLoading = true;
            state.errorPost = '';
        },

        setLoading: (state, action) =>{
            state.posts = [];
            state.isLoading = false;
            state.errorPost = '';
        },

        setError: (state, action) => {
            state.posts = [];
            state.isLoading = false;
            state.errorPost = action.payload;
        },
    },
});

const postsDetailReducer = postsDetailSlice.reducer;

export const { setPosts, setLoading, setError } = postsDetailSlice.actions;
export default postsDetailReducer;