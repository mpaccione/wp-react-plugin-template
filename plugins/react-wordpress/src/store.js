import { configureStore, combineReducers } from "@reduxjs/toolkit";
import errorReducer from "./errorSlice";
import dataReducer from "./dataSlice";

const rootReducer = combineReducers({
  error: errorReducer,
  data: dataReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
