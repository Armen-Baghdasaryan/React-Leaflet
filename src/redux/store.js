import { configureStore } from "@reduxjs/toolkit";
import selecdetPoints from "./reducers/adressesSlice";
import createSagaMiddleware from "redux-saga";
import sagaWatcher from "./saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    points: selecdetPoints,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(sagaWatcher);
