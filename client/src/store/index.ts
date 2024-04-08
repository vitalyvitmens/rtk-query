import { configureStore } from '@reduxjs/toolkit'
import { cardsApi } from '../services/cards/cards'
import { setupListeners } from '@reduxjs/toolkit/dist/query/react'

export const store = configureStore({
  reducer: { [cardsApi.reducerPath]: cardsApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardsApi.middleware),
})

setupListeners(store.dispatch)
