import { createSlice} from '@reduxjs/toolkit';

const initialState = {
    path: [],
}

const historyPathSlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        addHistory: (state, action) =>{
            state.path.push({
                path: action.payload
            });
        },
    },
})

const historyReducer = historyPathSlice.reducer;

export const {addHistory} = historyPathSlice.actions;
export default historyReducer;