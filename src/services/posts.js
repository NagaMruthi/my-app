// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/posts/' }),
  endpoints: (builder) => ({
    getPostsByName: builder.query({
      query: () => ``,
    }),
    addpost: builder.mutation({
      query: (newpost) => {
        return{
          url:'',
      method:'POST',
      body:newpost
        }
    }
    }),
    delpost: builder.mutation({
      query: (id) => {
        return{
          url:`/${id}`,
      method:'DELETE',
        }
    }
    }),
    update: builder.mutation({
      query: (update) => {
        return{
          url:`/${update.id}`,
      method:'PUT',
      body:update
        }
    }
    }),
  }),
})
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPostsByNameQuery,
  useAddpostMutation ,
  useLazyGetPostsByNameQuery,
  useUpdateMutation,
useDelpostMutation} = postsApi;