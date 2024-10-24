import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}

