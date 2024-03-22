import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { citiesApi } from "../Services/CitiesApi/citiesApi";
import CartSlice from "../Slices/CartSlices/CartSlice";

const store = configureStore({
  reducer: {
    [citiesApi.reducerPath]: citiesApi.reducer,
    cart: CartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(citiesApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
