import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  GetCardsApiResponse,
  GetCardsApiArg,
  AddCardApiResponse,
  AddCardApiArg,
  GetCardByIdApiResponse,
  GetCardByIdApiArg,
  DeleteCardApiResponse,
  DeleteCardApiArg,
} from './cards.types'

const baseUrl = 'http://localhost:5000/api'

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Cards'],
  endpoints: (build) => ({
    getCards: build.query<GetCardsApiResponse, GetCardsApiArg>({
      query: () => ({ url: `/cards` }),
      providesTags: ['Cards'],
    }),
    addCard: build.mutation<AddCardApiResponse, AddCardApiArg>({
      query: (queryArg) => ({
        url: `/cards`,
        method: 'POST',
        body: queryArg.fullCard,
      }),
      invalidatesTags: ['Cards'],
    }),
    getCardById: build.query<GetCardByIdApiResponse, GetCardByIdApiArg>({
      query: (queryArg) => ({ url: `/cards/${queryArg.id}` }),
    }),
    deleteCard: build.mutation<DeleteCardApiResponse, DeleteCardApiArg>({
      query: (queryArg) => ({ url: `/cards/${queryArg.id}`, method: 'DELETE' }),
    }),
  }),
})

export const {
  useGetCardsQuery,
  useAddCardMutation,
  useGetCardByIdQuery,
  useDeleteCardMutation,
} = cardsApi
