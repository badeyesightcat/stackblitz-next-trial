import { createSlice } from "@reduxjs/toolkit";

export const issuesSlice = createSlice({
  name: "issues",
  initialState: {
    list: <any>[],
  },
  reducers: {
    add: (state, action) => {
      state.list = [...state.list, action.payload];
    },
  },
});


console.log(issuesSlice);
export const { add } = issuesSlice.actions;
export default issuesSlice.reducer;
