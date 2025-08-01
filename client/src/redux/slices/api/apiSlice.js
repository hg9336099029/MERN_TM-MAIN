import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8800/api", // Change if your backend uses a different URL
    credentials: "include",
  }),
  endpoints: () => ({}),
});