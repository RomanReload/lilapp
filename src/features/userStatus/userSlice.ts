import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";

interface IUser {
    isClient:boolean;
    isAdmin:boolean;
}

const initialState:IUser = {
    isClient : false,
    isAdmin : false,
}

export const userStatusSlice = createSlice({
    name: 'userStatus',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        clientStatus: (state: Draft<IUser>, action:PayloadAction<boolean>) => {
            state.isClient = action.payload
        },
        adminStatus: (state: Draft<IUser>, action:PayloadAction<boolean>) => {
            state.isAdmin = action.payload
        },
    },
});

export const { clientStatus , adminStatus} = userStatusSlice.actions;
export default userStatusSlice.reducer;