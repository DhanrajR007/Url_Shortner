import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice.js";
import urlsReducer from "./slice/userSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    urls: urlsReducer,
  },
});

export default store;
