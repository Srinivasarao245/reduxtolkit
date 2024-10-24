import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "../services/todos";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: { 
        [todosApi.reducerPath]:todosApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(todosApi.middleware)
})
setupListeners(store.dispatch)
// Infer the `RootState` and `AppDispatch` types from the store itself
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}