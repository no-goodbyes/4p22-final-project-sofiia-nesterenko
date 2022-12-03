import { combineReducers, configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basket/basketSlice";
import productsReducer from "./products/productsSlice";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "products",
  storage,
};

const rootReducer = combineReducers({
  basket: basketReducer,
  products: productsReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],

  // reducer: {
  //     basket: basketReducer,
  //     products: productsReducer
  // }
});

export const persistor = persistStore(store);
