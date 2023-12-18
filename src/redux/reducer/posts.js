import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const fetchAllPosts = createAsyncThunk('posts/fetchall', async (payload, thunkApi) => {
    try {
        const response = await api.getPosts();

        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error?.response || error.message);
    }
});

export default fetchAllPosts;