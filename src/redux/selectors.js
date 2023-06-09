import {createSelector} from '@reduxjs/toolkit';



export const getStateUser = (state) => state.user;
export const getIsLoggedIn = createSelector(
    getStateUser,
    (state) => state.isLoggedIn
);