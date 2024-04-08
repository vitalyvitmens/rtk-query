import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const template = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  endpoints: () => ({}),
})
