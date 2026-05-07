import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const commentData = createApi({
    reducerPath:"comment",
    baseQuery: fetchBaseQuery({
        baseUrl:"https://jsonplaceholder.typicode.com/"
    }),
    tagTypes:["Comments"],
    keepUnusedDataFor:20,
    refetchOnFocus:true,
    endpoints: (builder) => ({
        getComment: builder.query({
            query: () => "comments",
            providesTags:["Comments"]
        }),
        getCommendById: builder.query({
            query: (id) => `comments/${id}`,
            providesTags:["Comments"]
        })
    })
})

export const {
    useGetCommentQuery,
    useGetCommendByIdQuery
} = commentData;