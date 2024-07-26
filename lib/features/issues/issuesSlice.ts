import { RootState } from "@/lib/store";
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

// [thunk function] if we could define thunk then it could be like below:
// const fetchIssues = (userId) => {
//   return async (dispatch, getState) => {
//     try {
//       const issues = await issueAPI.fetchIssues(userId);
//       dispatch(issuesFetched(issues));
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

export const selectIssues = (state: RootState) => state.issues.list;

export const { add } = issuesSlice.actions;
export default issuesSlice.reducer;
