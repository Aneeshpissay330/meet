import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the API slice to handle token fetching as a mutation
export const tokenAPI = createApi({
  reducerPath: 'tokenAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),  // Your base URL here
  endpoints: (builder) => ({
    // Change the query to a mutation
    getToken: builder.mutation<string, void>({
      query: () => ({
        url: 'get-token',  // The endpoint to call
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      }),
    }),
  }),
});

export const { useGetTokenMutation } = tokenAPI;