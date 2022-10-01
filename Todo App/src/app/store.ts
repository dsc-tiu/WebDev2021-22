import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./index";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage, //shorthand for storage:storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//Reducers will be auto-combined using combineReducers by configureStore(single level reducers)
export const store = configureStore({
  reducer: persistedReducer,
  //Ignores all the action types dispatched by redux-persist
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
