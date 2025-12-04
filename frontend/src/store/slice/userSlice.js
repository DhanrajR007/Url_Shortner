import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  urls: [],
};

const urlsSlice = createSlice({
  name: "urls",
  initialState,
  reducers: {
    updateUrls: (state, action) => {
      state.urls = action.payload;
    },
  },
});

export const { updateUrls } = urlsSlice.actions;
export default urlsSlice.reducer;
