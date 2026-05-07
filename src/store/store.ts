import { configureStore } from "@reduxjs/toolkit";
import { postEndPoints } from "../features/Posts/postSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { commentData } from "../features/comment/commentSlice";


export const store = configureStore({
    reducer:{
        [postEndPoints.reducerPath]: postEndPoints.reducer,
        [commentData.reducerPath] : commentData.reducer
    },
    
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(postEndPoints.middleware,commentData.middleware),
})

setupListeners(store.dispatch); 
//setupListeners: enables automatic re-fetching when the user refocuses the browser tab or regains internet connection.
