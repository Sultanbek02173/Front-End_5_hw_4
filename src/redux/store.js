import { combineReducers, configureStore } from '@reduxjs/toolkit';
import postsReducer from './slice/postSlice';
import postsDetailReducer from './slice/postDetailSlice';
import historyReducer from './slice/historyPath';

const rootReducer = combineReducers({
    posts: postsReducer,
    postsDetail: postsDetailReducer,
    history: historyReducer,
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export default setupStore;