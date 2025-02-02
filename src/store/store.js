import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import * as thunk from "redux-thunk";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: thunk,
      },
    }),
});

export default store;
