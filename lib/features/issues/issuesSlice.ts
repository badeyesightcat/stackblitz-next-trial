import { RootState } from "@/lib/store";
import { createSlice } from "@reduxjs/toolkit";

export interface Issue {
  _id: string;
  title: string;
  collectionType: string;
  tag: string[];
  reportedBy: string;
  assignedTo: string;
  priority: string;
  date: string;
}

export interface IssuesState {
  list: Issue[];
}

const initialState: IssuesState = {
  list: [
    {
      _id: "1",
      title: "Plan the first sprint",
      collectionType: "Backlog",
      tag: ["Integration"],
      reportedBy: "Charlie",
      assignedTo: "Daria",
      priority: "High priority",
      date: new Date().toLocaleDateString(),
    },
    {
      _id: "2",
      title: "Fix duplicate notifications",
      collectionType: "Backlog",
      tag: ["Bug"],
      reportedBy: "Charlie",
      assignedTo: "Lizzy",
      priority: "Low priority",
      date: new Date().toLocaleDateString(),
    },
    {
      _id: "3",
      title: "Enable checkout on mobile",
      collectionType: "Backlog",
      tag: ["Mobile"],
      reportedBy: "Charlie",
      assignedTo: "Dolores",
      priority: "High priority",
      date: new Date().toLocaleDateString(),
    },
    {
      _id: "4",
      title: "Add intercom integration",
      collectionType: "Backlog",
      tag: ["Integration"],
      reportedBy: "Charlie",
      assignedTo: "Nick",
      priority: "Low priority",
      date: new Date().toLocaleDateString(),
    },
    {
      _id: "5",
      title: "Sprint item template",
      collectionType: "Backlog",
      tag: ["Styling"],
      reportedBy: "Charlie",
      assignedTo: "Bazos",
      priority: "Medium priority",
      date: new Date().toLocaleDateString(),
    },
  ],
};

export const issuesSlice = createSlice({
  name: "issues",
  initialState,
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
