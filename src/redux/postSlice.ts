import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState } from "../types";

const initialState: IState = {
    postsId: []
};

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addToFavorites: (state: IState, action: PayloadAction<number>) => {
            state.postsId = [...state.postsId, action.payload];
        },
        deleteFromFavorites: (state: IState, action: PayloadAction<number>) => {
            state.postsId = state.postsId.filter((id: number): boolean => id !== action.payload);
        },
    },
});

export const { addToFavorites, deleteFromFavorites } = postSlice.actions;
export default postSlice.reducer;
