import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchAllPosts = createAsyncThunk('posts/fetchall', async (payload, thunkApi) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();

        return posts;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export default fetchAllPosts;