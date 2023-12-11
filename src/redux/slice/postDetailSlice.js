import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    postsDetail: [],
    isLoadingDetail: true,
    errorPostDetail: '',
}

const postsDetailSlice = createSlice({
    name: 'postsDetail',
    initialState,
    reducers:{
        setPosts: (state, action) =>{
            state.postsDetail = action.payload;
            state.isLoadingDetail = false;
            state.errorPostDetail = '';
        },

        setLoading: (state, action) =>{
            state.postsDetail = [];
            state.isLoadingDetail = true;
            state.errorPostDetail = '';
        },

        setError: (state, action) => {
            state.postsDetail = [];
            state.isLoadingDetail = false;
            state.errorPostDetail = action.payload;
        },
    },
});

const postsDetailReducer = postsDetailSlice.reducer;

export const { setPosts, setLoading, setError } = postsDetailSlice.actions;
export default postsDetailReducer;