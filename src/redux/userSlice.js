import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false
    },
    reducers: {
        setUserLogged (state, action) {
            state.isLoggedIn = action.payload;
        }
    }
});

export const {setUserLogged} = userSlice.actions;

export default userSlice.reducer;