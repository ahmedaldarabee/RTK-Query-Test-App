import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postEndPoints = createApi({
    reducerPath: "posts",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/"
    }),
    keepUnusedDataFor:20,
    // keepUnusedDataFor controls cache lifetime after it becomes unused : 20 second,
    refetchOnFocus:true, //[ setupLister Idea ]
    tagTypes: ["Posts"],        
    endpoints: (builder) => ({
        getPosts: builder.query({
            query : () => "posts",
            providesTags:["Posts"]
        }),
        getPostsById: builder.query({
            query : (id:number) => `posts/${id}`,
            providesTags:["Posts"]
        }),
        createPosts: builder.mutation({
            query:(newPostData) => ({
                url:"posts",
                method:"POST",
                body:newPostData
            }),
            invalidatesTags: ["Posts"]
        })
    }),
    
});

export const { useGetPostsQuery, useGetPostsByIdQuery , useCreatePostsMutation } = postEndPoints;
