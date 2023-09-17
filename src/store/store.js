import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { countriesApi } from '../services/country';;
export const store = configureStore({
    reducer: {
        [countriesApi.reducerPath]: countriesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware),
})
setupListeners(store.dispatch);