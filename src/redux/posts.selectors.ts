import { RootState } from "../types";

export const getAllFavoritesSelector = (state: RootState) =>
    state.posts.postsId;
